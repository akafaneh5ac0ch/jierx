import template from './index.vdt';

export default class extends Intact {
    get template() { return template; }

    defaults() {
        return {
            data: [
                {test: 1, aa: 'aa'},
                {test: 2, aa: 'bb'},
            ]
        }
    }

    remove() {
        const data = this.get('data').slice(0);
        data.pop();
        this.set('data', data);
    }

    getCheckedData() {
        console.log(this.table.getCheckedData());
        console.log(this.radioTable.getCheckedData());
    }
}

if (module.hot) {
    module.hot.accept();
}
