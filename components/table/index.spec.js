import BasicDemo from '~/components/table/demos/basic';
import CheckTypeDemo from '~/components/table/demos/checkType'; 
import ExpandDemo from '~/components/table/demos/rowExpandable';
import SortDemo from '~/components/table/demos/sort';
import GroupDemo from '~/components/table/demos/group';
import {mount, unmount, dispatchEvent, getElement} from 'test/utils';

describe('Table', () => {
    let instance;

    afterEach(() => unmount(instance));

    it('check & uncheck', () => {
        instance = mount(BasicDemo);
        const table = instance.refs.__test;

        // click row
        const [tr1, tr2] = instance.element.querySelectorAll('.k-tbody tr');
        tr1.click();
        expect(table.get('checkedKeys')).deep.eql([0]);
        tr2.click();
        expect(table.get('checkedKeys')).deep.eql([0, 1]);
        expect(table.isCheckAll()).eql(true);

        tr1.click();
        expect(table.get('checkedKeys')).deep.eql([1]);
        expect(table.isCheckAll()).eql(false);

        const all = instance.element.querySelector('.k-checkbox');
        all.click();
        expect(table.isCheckAll()).eql(true);
        all.click();
        expect(table.isCheckAll()).eql(false);
        expect(table.get('checkedKeys')).deep.eql([]);
    });

    it('click row of radio table', () => {
        instance = mount(CheckTypeDemo);
        const table = instance.refs.__radio;
        
        // click row
        const [tr1, tr2] = table.element.querySelectorAll('.k-tbody tr');
        tr1.click();
        expect(table.get('checkedKey')).eql(0);
        tr2.click();
        expect(table.get('checkedKey')).eql(1);
    });

    it('getCheckedData', () => {
        instance = mount(CheckTypeDemo);
        const {__checkbox: checkboxTable, __radio: radioTable} = instance.refs;

        const [tr1, tr2] = checkboxTable.element.querySelectorAll('.k-tbody tr');
        tr1.click();
        expect(JSON.stringify(checkboxTable.getCheckedData())).to.matchSnapshot();
        tr2.click();
        expect(JSON.stringify(checkboxTable.getCheckedData())).to.matchSnapshot();

        const [tr11, tr22] = radioTable.element.querySelectorAll('.k-tbody tr');
        tr11.click();
        expect(JSON.stringify(radioTable.getCheckedData())).to.matchSnapshot();
        tr22.click();
        expect(JSON.stringify(radioTable.getCheckedData())).to.matchSnapshot();
    });

    it('expand & shrink', () => {
        instance = mount(ExpandDemo);
        const {__test1: rowExpandableTable, __test2: rowUnExpandableTable} = instance.refs; 

        const [tr] = rowExpandableTable.element.querySelectorAll('.k-tbody tr');
        tr.click();
        expect(rowExpandableTable.element.outerHTML).to.matchSnapshot();
        tr.click();
        expect(rowExpandableTable.element.outerHTML).to.matchSnapshot();

        const [tr1] = rowUnExpandableTable.element.querySelectorAll('.k-tbody tr');
        tr1.click();
        expect(rowUnExpandableTable.element.outerHTML).to.matchSnapshot();

        const icon = tr1.querySelector('.icon');
        icon.click();
        expect(rowUnExpandableTable.element.outerHTML).to.matchSnapshot();
        icon.click();
        expect(rowUnExpandableTable.element.outerHTML).to.matchSnapshot();
    });

    it('sort', () => {
        instance = mount(SortDemo);
        
        const [, th1, th2] = instance.element.querySelectorAll('.k-thead th');
        th1.click();
        expect(instance.element.outerHTML).to.matchSnapshot();
        th2.click();
        expect(instance.element.outerHTML).to.matchSnapshot();
    });

    it('group', () => {
        instance = mount(GroupDemo);

        const {__test1, __test2} = instance.refs;

        const icon = __test1.element.querySelector('.k-arrow');
        dispatchEvent(icon, 'mouseenter');
        const dropdown = getElement('.k-table-dropdown');
        expect(dropdown.innerHTML).to.matchSnapshot();

        const item = dropdown.querySelector('.k-item:nth-child(2)');
        item.click();
        expect(__test1.element.outerHTML).to.matchSnapshot();

        const icon2 = __test2.element.querySelector('.k-arrow');
        dispatchEvent(icon2, 'mouseenter');
        const dropdown2 = getElement('.k-table-dropdown');
        expect(dropdown.innerHTML).to.matchSnapshot();

        const [item1, item2] = dropdown2.querySelectorAll('.k-item .k-checkbox');
        item1.click();
        expect(__test2.element.outerHTML).to.matchSnapshot();
        item2.click();
        expect(__test2.element.outerHTML).to.matchSnapshot();
    });
});
