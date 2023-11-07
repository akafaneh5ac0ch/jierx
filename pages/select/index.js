import template from './index.vdt';

export default class extends Intact {
    get template() { return template; }
    
    defaults(){
        return {
            value:''
        }
    }  
    onClick(data){
        this.set('value',data.text)
    }
}

if (module.hot) {
    module.hot.accept();
}
