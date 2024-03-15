import template from './index.vdt';

export default class extends Intact {
    get template() { return template; }

    defaults() {
        return {
            current: 1,
            size: 10,
            total: 100
        }
    }
}


if (module.hot) {
    module.hot.accept();
}
