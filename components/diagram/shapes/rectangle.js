import {DShape} from './shape';

export class DRectangle extends DShape {
    defaults() {
        return {
            ...super.defaults(),
            width: 120,
            height: 60,
            rounded: false,
        };
    }

    _getStylesheet() {
        const {rounded} = this.get();

        return `rounded=${rounded ? 1 : 0};whiteSpace=wrap;html=1;`;
    }
}
