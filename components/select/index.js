import Intact from 'intact';
import template from './index.vdt';
import './index.styl';
import position from '../moveWrapper/position';

export default class extends Intact{
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            data: [
                { text:'北京',value: 'beijing' },
                { text:'上海',value: 'shanghai' },
                { text:'东京', value: 'dongjing',disabled:true }
            ],
            value: '',
            value_multiple: [],
            disabled: false,
            clearable: false, //删除按钮
            multiple: false, //支持多选li
            size:{'width':'','height':''},  //自定大小
            group:[], //分类
            filterable: false, // 搜索筛选
            inputValue:'',
            show: false,
            class:undefined,
        }
    }

    _init() {
        // this.set('inputValue',this.get('value'))
        this.on('$changed:show', (c, isShow) => {
            if (isShow) this._position();
        });
        this.on('$change:value',function(){ 
            if(this.get('filterable')){
                this.set('show', true);
            } 
        })
        // if(!this.get('value').hasOwnProperty('text') && this.get('value') !=''){
        //     //判断用户给的默认值是否存在list中
        //     let result = this.get('data').find(item=>{
        //         return this.get('value') == item.text
        //     })
        //     if(result){
        //         this.set('b', { text: result.text, value: result.value })
        //     }
        // }
    }
    _create(){
        
    }

    onBlur(){
        this.set('show',false)
    }
    onInput(e){
        this.set('inputValue',e.target.value)
    }
    onClick(data){
        if(data.disabled) return 

        if(this.get('multiple')){
            let index = this.get('value_multiple').indexOf(data.text);
            if(index != -1){
                // 已选中
                this.deleTag(index)
            }else{
                this.get('value_multiple').push(data.text);
                this.update()
            }
        }else{
            this.set('value', data.text);
            this.set('inputValue', data.text)
        }
        // this.trigger('click',data);
        // this._position();
    }

    deleTag(index){
        this.get('value_multiple').splice(index,1);
        this.update()
    }

    _position() {
        this._dropdown.element.style.width = getComputedStyle(this.element).width;
        position(this._dropdown.element, {my: 'left top', at: 'left bottom', of: this.element});
    }
}
