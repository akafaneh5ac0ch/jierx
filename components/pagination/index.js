import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

export default class Pagination extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            total: 0,
            current: 1,
            limit: 10,
            counts: 7,
            showTotal: true,
            limits: [10, 20, 50],
            value: '',
            showGoto: false,
            size: 'default',
        };
    }

    _init() {
        // avoid setting incorrect value
        this.changePage(this.get('current'));

        this.on('$change:limit', () => {
            this.set('current', 1);
        });
    }

    changePage(page) {
        const {total, limit} = this.get();
        const totalPages = Math.ceil(total / limit);

        if (page > totalPages) {
            page = totalPages;
        }
        if (page < 1) {
            page = 1;
        }

        this.set('current', page);
    }

    prev() {
        this.changePage(this.get('current') - 1);
    }

    next() {
        this.changePage(this.get('current') + 1);
    }

    fastPrev() {
        const page = this.get('current') - (this.get('counts') - 4);
        this.changePage(page);
    }

    fastNext() {
        const page = this.get('current') + (this.get('counts') + 4);
        this.changePage(page);
    }

    _goto(e) {
        // const regexp = /^[1-9]\d*$/;
        const value = parseInt(e.target.value);
        this.changePage(value);
    }
}
