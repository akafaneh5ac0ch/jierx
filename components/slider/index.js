/**
 * Created by sylvia on 2017/10/18.
 */
import template from './index.vdt'
import './index.styl'

export default class extends Intact {
    get template() { return template;}

    defaults() {
        return {
            size: 'default',// default | small | mini
            max: 100,
            min: 0,
            value: [50, 80],
            isRange: true,
            unit: '',
            isShowEnd: true,
            isShowInput: true,
            step: 1,
            _inputValue:0,
            _isDragging: false
        }
    }

    _init() {
        //如有步长不为1时，调整value值
        let step = this.get('step');
        if(this.get('step')!== 1) {
            let initValue = this.get('value'),
                valueArr = [],
                value;
                if (this.get('isRange')) {
                    valueArr[0] = Math.round(initValue[0] / step) * step;
                    valueArr[1] = Math.round(initValue[1] / step) * step;
                    this.set('value', valueArr);
                    this.update();
                } else {
                    value = Math.round(initValue / step) * step;
                    this.set('value', value);
                }
        }
        this.set('_inputValue', this.get('value'));
        this._onSliding = this._onSliding.bind(this);
        this._onSlideEnd = this._onSlideEnd.bind(this);
        this.on("$change:_inputValue", (c, val) => {
            if (!this.get('_isDragging')) {
                this.set('value', val);
            }
        })

    }

    clickWrapper(e) {
        if (this.get('disabled') || this.get('_isDragging')) return;
        let currentPosition = e.clientX;
        let newValue = this._setNewValue(currentPosition, this.get('_isDragging'));
        if (!this.get('isRange')) {
            this.set({
                'value': newValue,
                '_inputValue': newValue
            });
        } else {
            let leftBtnPosition = this.$sliderFirstBtn.getBoundingClientRect().left,
                rightBtnPosition = this.$sliderSecondBtn.getBoundingClientRect().left,
                valueArr = this.get('value');
            if (Math.abs(leftBtnPosition - currentPosition) <= Math.abs(rightBtnPosition -currentPosition))  {
                valueArr[0] = newValue;
            } else {
                valueArr[1] = newValue;
            }

            this.set('value', valueArr);
            this.update();
        }
    }

    onDragBtn(e) {
        this.set('_isDragging', true);
        window.addEventListener('mousemove', this._onSliding);
        window.addEventListener('mouseup', this._onSlideEnd)
    }



    _onSliding(e) {
        let tempValue = this._setNewValue(e.clientX, this.get('_isDragging')),
            step = this.get('step');
        this.set({
            'value': tempValue,
            '_inputValue': Math.round(tempValue / step) * step
        });

    }
    _onSlideEnd(e) {
        if (this.get('_isDragging')) {
            this.set('_isDragging', false);
            let newValue = this._setNewValue(e.clientX, this.get('_isDragging'));
            this.set({
                'value': newValue,
                '_inputValue': newValue,
            });
            this.trigger('stop', newValue);
            window.removeEventListener('mousemove', this._onSliding);
            window.removeEventListener('mouseup', this._onSlideEnd);
        }
    }

    _setNewValue(startPos, isdragging) {
        let currentPosition = startPos,
            boundingPosition = this.$slider.getBoundingClientRect().left,
            percent = (currentPosition - boundingPosition) / this.$slider.offsetWidth,
            sliderValue = this.get('max') - this.get('min'),
            step = this.get('step'),
            value;
        if (percent <= 0 ) {
            value = this.get ('min');
        } else if (percent >= 1) {
            value = this.get ('max')
        } else {
            value = isdragging ? sliderValue * percent : Math.round(sliderValue * percent / step) * step;
        }
        return value;
    }

    onDragFirstBtn(indexFlag) {
        this._min = this.get('value')[0];
        this._max = this.get('value')[1];

        this.set({
            '_isDragging': true,
            '_isFirst': true,
            '_isSecond': false
        });
        this._onRangeSliding = this._onRangeSliding.bind(this, indexFlag);
        this._onRangeSlideEnd = this._onRangeSlideEnd.bind(this,indexFlag);

        window.addEventListener('mousemove', this._onRangeSliding);
        window.addEventListener('mouseup', this._onRangeSlideEnd);
    }

    _onRangeSliding(indexFlag,e){
        if (this.get('_isSecond')) return;
        let tempValue = this._setNewValue(e.clientX, this.get('_isDragging'));
        this.set('value', [Math.min(tempValue, this._max), Math.max(tempValue, this._max)]);
        this.update();
    }

    _onRangeSlideEnd(e){
        if (this.get('_isSecond') || !this.get('_isDragging')) return;
        this.set('_isDragging', false);
        this.set('_isFirst',false);
        this.trigger('stop', this.get('value'));
        window.removeEventListener('mousemove', this._onRangeSliding);
        window.removeEventListener('mouseup', this._onRangeSlideEnd);
    }

    onDragSecondBtn(indexFlag) {
        this._min = this.get('value')[0];
        this._max = this.get('value')[1];
        this.set({
            '_isDragging': true,
            '_isFirst': false,
            '_isSecond': true
        });
        this._onSecondBtnSliding = this._onSecondBtnSliding.bind(this, indexFlag);
        this._onSecondBtnSlideEnd = this._onSecondBtnSlideEnd.bind(this,indexFlag);

        window.addEventListener('mousemove', this._onSecondBtnSliding,);
        window.addEventListener('mouseup', this._onSecondBtnSlideEnd)
    }

    _onSecondBtnSliding(indexFlag,e){
        if (this.get('_isFirst')) return;
        let tempValue = this._setNewValue(e.clientX, this.get('_isDragging'));
        const max = Math.max.apply(Math, [tempValue, this._min]);
        const min = Math.min.apply(Math, [tempValue, this._min]);
        this.set('value', [min, max]);
        this.update();
    }

    _onSecondBtnSlideEnd(e){
        if (this.get('_isFirst') || !this.get('_isDragging')) return;
        this.set('_isDragging', false);
        this.set('_isSecond',false);
        this.trigger('stop', this.get('value'));
        window.removeEventListener('mousemove', this._onSecondBtnSliding);
        window.removeEventListener('mouseup', this._onSecondBtnSlideEnd);
    }
}