import Page from './index.vue';
import createPage from '../utils';
import 'pages/progress/index.styl';

export default createPage(Page);

if (module.hot) {
    module.hot.accept();
}
