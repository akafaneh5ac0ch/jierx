const KDoc = require('kdoc');
const path = require('path');
const Vdt = require('vdt');
const webpackConfig = require('./site/webpack.config.render');
const webpackConfigClient = require('./site/webpack.config.client');
const webpack = require('webpack');
const highlight = require('highlight.js');
const babel = require('babel-core');

const languageMap = function(key) {
    const map = {
        'vue': 'html',
        'vdt': 'jsx',
    };
    return map[key] || key;
};

module.exports = function(isDev) {
    const hasWrittenSidebar = {};

    let _resolve;
    const promise = new Promise((resolve) => {
        _resolve = resolve;
    });
    promise.resolve = (...args) => _resolve(...args);
    const root = isDev ? 
        path.resolve(__dirname, './site/.dist') : 
        path.resolve(__dirname, `./site/dist`);

    const doc = new KDoc(
        './@(docs|components)/**/*.md',
        root
    );

    doc.use(KDoc.plugins.md);

    doc.use(function(ctx) {
        Vdt.setDefaults({
            disableSplitText: true,
            skipWhitespace: false,
            delimiters: ['{{', '}}']
        });

        ctx.hook.add('md.renderer', (renderer, file, codes) => {
            renderer.table = (header, body) => {
                return `<div class="k-table-wrapper k-border">
                    <table class="k-table">
                        <thead>${header}</thead>
                        <tbody>${body}</tbody>
                    </table>
                </div>`
            };
            const codeRenderer = renderer.code;
            renderer.code = function(code, language) {
                const matches = code.match(/@file ([^\s]+)/);
                if (matches) {
                    code = code.substring(code.indexOf('\n') + 1);
                }
                const result = codeRenderer.call(this, code, language);
                if (matches) {
                    codes[codes.length - 1].file = matches[1];
                }
                if (/demos/.test(file.path)) {
                    return '';
                } else {
                    return result; 
                }
            };

            renderer.paragraph = function(text) {
                return '<p>' + text.replace(/\n/g, '') + '</p>\n';
            };
        });

        ctx.hook.add('dist.before', async function(files) {
            await ctx.fsEach(async function(file, index) {
                file.extname = '.json';
                const basename = path.basename(file.path, '.json');
                if (basename !== 'index') {
                    file.path = path.join(path.dirname(file.path), basename, 'index.json');
                }
                file.md.index = index;

                let hasJs = false;
                let hasStylus = false;
                file.md.codes.forEach(item => {
                    if (item.example) {
                        item.content = [
                            item.content,
                            `export const example = true;`,
                        ].join('\n');
                        return;
                    };
                    if (item.language === 'js' && !item.file) {
                        hasJs = true;
                        item.content = [
                            `import Intact from 'intact';`,
                            `import template from './index.vdt';`,
                            hasStylus ? `import './index.styl'; \n` : '',
                            item.content,
                        ].join('\n');
                    }
                    if (item.language === 'styl') hasStylus = true;
                });
                if (!hasJs) {
                    file.md.codes.splice(hasStylus ? 2 : 1, 0, {
                        language: 'js',
                        content: [
                            `import Intact from 'intact';`,
                            `import template from './index.vdt';`,
                            hasStylus ? `import './index.styl'; \n` : '',
                            `export default class extends Intact {`,
                            `    @Intact.template()`,
                            `    static template = template;`,
                            `}`,
                        ].join('\n')
                    });
                }

                const data = Object.assign({}, file.md, {
                    sideBars: file.sideBars,
                });

                if (/demos/.test(file.path)) {
                    data.highlighted = file.md.codes.map(item => {
                        return {
                            language: item.language,
                            content: `<pre><code class="hljs ${languageMap(item.language)}">` +
                                highlight.highlight(languageMap(item.language), item.content).value +
                            `</code></pre>`,
                            file: item.file,
                        };
                    });
                }

                delete data.source;
                // remove redundant data
                const _data = JSON.parse(JSON.stringify(data));
                delete _data.codes;

                const sidebar = data.setting && data.setting.sidebar;
                if (sidebar && !hasWrittenSidebar[sidebar]) {
                    await ctx.fsWrite(path.join(root, `${sidebar}.json`), JSON.stringify(data.sideBars, null, 4));
                }
                delete _data.sideBars;

                file.contents = new Buffer(JSON.stringify(_data, null, 4));
            });
        });

        ctx.hook.add('dist.after', async files => {
            await ctx.fsEach(async function(file) {
                if (/demos/.test(file.path)) {
                    await file.md.codes.forEach(async item => {
                        file.extname = '.' + item.language;
                        let content = item.content;
                        if (item.language === 'js' && !item.file) {
                            content = [
                                `export {default as data} from './index.json';`,
                                item.content,
                            ].join('\n');
                        } else if (item.language === 'styl' && !item.file) {
                            content = [
                                `.example.index-${file.md.index}`,
                                ...content.split('\n').map(line => `    ${line}`)
                            ].join('\n');
                        }
                        await ctx.fsWrite(!item.file ? file.relative : file.dirname + '/' + item.file, content);
                    });
                } else {
                    file.extname = '.js';
                    if (!file.md.setting) return;

                    // generate example demo file
                    let index = 0;
                    file.md.codes.forEach(async item => {
                        if (item.example) {
                            await ctx.fsWrite(
                                path.join(file.dirname, `demos/demo${index++}/index.js`),
                                item.content
                            );
                        }
                    });

                    const sidebar = file.md.setting.sidebar;
                    await ctx.fsWrite(
                        file.relative,
                        [
                            `import Article from '~/../src/components/article';`,
                            `import data from './index.json';`,
                            sidebar ? `import sidebar from '~/${sidebar}.json';` : undefined,
                            ``,
                            `const r = require.context('./', true, /demos.*index.js$/);`,
                            `const demos = r.keys().map(r);`,
                            ``,
                            `export default class extends Article {`,
                            sidebar ? `    static sidebar = sidebar;` : undefined,
                            `    static data = data;`,
                            `    defaults() {`,
                            `        return {...super.defaults(), ...data, demos};`,
                            `    }`,
                            `}`,
                        ].join('\n')
                    );
                }
            });

            // 静态化
            if (isDev) {
                ctx.fsEach(async function(file) {
                    if (!/demos/.test(file.path)) {
                        file.extname = '.html';
                        await ctx.fsWrite(
                            file.relative,
                            Vdt.renderFile(path.resolve(__dirname, './site/src/index.vdt'))
                        );
                    }
                });

                promise.resolve();
            } else {
                const compiler = webpack(webpackConfig()); 
                compiler.run(async (err, stats) => {
                    console.log(stats.toString({
                        colors: true 
                    }));
                    delete require.cache[require.resolve('./site/dist/render')];
                    const render = require('./site/dist/render');

                    await ctx.fsEach(async function(file) {
                        if (!/demos/.test(file.path)) {
                            file.extname = '.html';
                            const pathname = path.relative(ctx.data.output, file.path).replace('index.html', '');
                            const data = await render(`/${pathname}`);
                            await ctx.fsWrite(
                                file.relative, 
                                Vdt.renderFile(path.resolve(__dirname, './site/src/index.vdt'), {
                                    title: file.md.setting.title,
                                    content: data.content,
                                    style: data.style,
                                })
                            );
                        }
                    });

                    promise.resolve(render);
                });
            }
        });
    });

    doc.run(); 

    return promise;
};

