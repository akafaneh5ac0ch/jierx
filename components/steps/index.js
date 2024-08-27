import Intact from 'intact';
import template from './index.vdt';
import Step from './step';
import './index.styl';

export default class Steps extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            value: undefined,
            status: 'ready',
        };
    }
}

export {Steps, Step};

