import Intact from 'intact';
import template from './index.vdt';
import './index.styl';
import ResizeObserver from 'resize-observer-polyfill'; 

export default class Code extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        value: String,
        language: String,
        width: String,
        height: String,
        loading: Boolean,
        theme: ['vs', 'vs-dark', 'hc-black'],
        options: Object,
        readonly: Boolean,
    }

    defaults() {
        return {
            value: '',
            language: 'javascript',
            width: undefined,
            height: undefined,
            loading: true,
            theme: 'vs',
            readonly: false,
            options: {},
        }
    }

    _init() {
        this.on('$receive:value', (c, v) => {
            if (v == null) {
                this.set('value', '', {silent: true});
            }
        });
    }

    _mount() {
        require(['monaco-editor'], monaco => {
            if (this.destroyed) return;

            const {value, language, theme, options, readonly} = this.get();
            this.Editor = monaco.editor;
            this.editor = monaco.editor.create(this.element, {
                value,
                language,
                theme,
                readOnly: readonly,
                ...options,
            });

            this.set('loading', false);
            this._watch();
        });
    }

    _watch() {
        this.on('$change:language', (c, v) => {
            this.Editor.setModelLanguage(this.editor.getModel(), v);
        });
        this.on('$change:theme', (c, v) => {
            this.Editor.setTheme(v);
        });
        this.on('$change:options', (c, v) => {
            this.editor.updateOptions(v);
        });
        this.on('$receive:value', () => {
            this.editor.setValue(this.get('value'));
        });
        this.editor.onDidChangeModelContent(e => {
            this.set('value', this.editor.getValue());
        });

        const ro = this.ro = new ResizeObserver(() => {
            this.editor.layout();
        });
        ro.observe(this.element);
    }

    _destroy() {
        if (this.editor) {
            this.editor.dispose();
            this.ro.disconnect();
        }
    }
}

export {Code};
