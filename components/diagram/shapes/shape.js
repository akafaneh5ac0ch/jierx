import Intact from 'intact';
import {mapChildren} from '../../utils';
import mx from '../mxgraph';
import {DLayout} from '../layout';

const {mxCell, mxGeometry} = mx;

export class DShape extends Intact {
    static template = function(data, Vdt) {
        return Vdt.miss.h(data.constructor.name, null, data.children);
    };

    static propTypes = {
        // key: {
            // required: true,
        // },
        borderStyle: ['solid', 'dashed', 'dotted'],
    }; 

    defaults() {
        return {
            html: undefined,
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            border: 'solid',

            _diagram: undefined,
            _parent: undefined,
            _layout: undefined,
        };
    }

    _init() {
        this.on('$receive:children', (c, children) => {
            let hasElement = false;
            this.children = mapChildren(children, vNode => {
                if (vNode.tag.prototype instanceof DShape || vNode.tag === DLayout) {
                    vNode.props = {
                        ...vNode.props,
                        _diagram: this.get('_diagram'),
                        _parent: this,
                    };
                } else {
                    hasElement = true;
                }
                return vNode;
            });
            this.hasElement = hasElement;
        });
    }

    _mount() {
        const {_diagram, _layout} = this.get();

        this.cell = this._cell();

        _diagram.addShape(this);

        if (_layout) {
            _layout.addShape(this);
        }
    }

    render() {
        const diagram = this.get('_diagram');
        const parent = this.get('_parent');
        const graph = diagram.graph;
        const cell = this.cell;

        cell.vertex = true;

        // if hasElement, disable edit
        graph.setCellStyles('editable', this.hasElement ? 0 : 1, [cell]);

        this._setStyle(graph, cell);

        graph.addCell(cell, parent.cell);
    }

    /**
     * generate the cell
     */
    _cell() {
        return new mxCell(this._getValue(), this._getGeometry(), this._getStylesheet());        
    }

    _getValue() {
        const {html} = this.get();
        return html || this.hasElement && this.element || null;
    }

    _getStylesheet() {
        return '';
    }

    _getGeometry() {
        const {width, height, top, left} = this.get();
        return new mxGeometry(+left, +top, +width, +height);
    }

    _setStyle(graph, cell) {
        const cells = [cell];
        const styles = this._genStyles();

        for (let key in styles) {
            graph.setCellStyles(key, styles[key], cells);
        }
    }

    _genStyles() {
        return this._genStylesForPattern(this.get('borderStyle'));
    }

    _genStylesForPattern(pattern) {
        const styles = {};

        switch (pattern) {
            case 'dashed':
                styles.dashed = 1;
                styles.dashPattern = null;
                break;
            case 'dotted':
                styles.dashed = 1;
                styles.dashPattern = '1 2';
                break;
            case 'solid':
                styles.dashed = null;
                styles.dashPattern = null;
                break;
        }

        return styles;
    }
}
