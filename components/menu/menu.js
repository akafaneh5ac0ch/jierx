import Intact from 'intact';
import template from './menu.vdt';
import './index.styl';
import '../../styles/kpc.styl';
import DropdownMenu from '../dropdown/menu';

export default class Menu extends DropdownMenu {
    @Intact.template()
    static template = template;

    static propTypes = {
        expandedKeys: Array,
        selectedKey: String,
        theme: ['light', 'dark'],
        collapse: Boolean,
    };

    defaults() {
        return {
            ...super.defaults(),
            expandedKeys: [],
            selectedKey: '',
            theme: 'dark',
            collapse: false,

            _root: undefined,
        };
    }

    _mount() {
        if (this._isDropdownMenu()) {
            super._mount();
        }
    }

    isExpanded(key) {
        const {expandedKeys, collapse} = this.get();
        return !collapse && expandedKeys.indexOf(key) > -1;
    }

    expand(key) {
        const expandedKeys = this.get('expandedKeys').slice(0);
        expandedKeys.push(key);
        this.set('expandedKeys', expandedKeys);
    }

    shrink(key) {
        const expandedKeys = this.get('expandedKeys').slice(0);
        const index = expandedKeys.indexOf(key);
        expandedKeys.splice(index, 1);
        this.set('expandedKeys', expandedKeys);
    }

    toggleExpand(key) {
        if (this.isExpanded(key)) {
            this.shrink(key);
        } else {
            this.expand(key);
        }
    }

    select(key) {
        this.set('selectedKey', key);
    }

    isSelected(key) {
        return this.get('selectedKey') === key;
    }

    _isDropdownMenu() {
        const _root = this.get('_root');
        return _root && _root.get('collapse');
    }
}
