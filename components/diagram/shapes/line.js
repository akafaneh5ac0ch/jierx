import Shape from './shape';
import mx from '../mxgraph';

const {mxCell, mxGeometry, mxPoint} = mx;

export default class Line extends Shape {
    static propTypes = {
        type: ['rounded', 'sharp', 'curved', 'straight'],
        pattern: ['solid', 'dashed', 'dotted'],
        startPoint: Array,
        endPoint: Array,
    };

    defaults() {
        return {
            ...super.defaults(),
            startPoint: [0, 0],
            endPoint: [50, 0],
            type: 'straight',
            pattern: 'solid',
        };
    }

    _init() {

    }

    render(graph, diagram) {
        const {html, from, to, startPoint, endPoint} = this.get();
        const geo = new mxGeometry(0, 0, 0, 0);
        const stylesheet = 'endArrow=classic;html=1;fontSize=12;';
        const cell = new mxCell(html, geo, stylesheet);
        cell.edge = true;
        geo.relative = true;

        if (!from || !to) {
            geo.setTerminalPoint(new mxPoint(...startPoint), true);
            geo.setTerminalPoint(new mxPoint(...endPoint), false);
        }

        this._setStyle(graph, cell);

        const vertexes = diagram.vertexes;
        const source = from ? vertexes.get(from).cell : null;
        const target = to ? vertexes.get(to).cell : null;

        graph.addCell(cell, null, null, source, target); 
    }

    _genStyles() {
        return {
            ...this._genStylesForType(),
            ...this._genStylesForPattern(this.get('pattern')),
        };
    }

    _genStylesForType() {
        const styles = {};
        const {type} = this.get();

        if (type !== 'straight') {
            styles.edgeStyle = 'orthogonalEdgeStyle';
        }
        switch (type) {
            case 'rounded':
                styles.rounded = 1;
                styles.curved = null;
                break;
            case 'curved':
                styles.rounded = 0;
                styles.curved = 1;
                break;
            case 'sharp':
                styles.rounded = 0;
                styles.curved = null;
                break;
            default:
                styles.edgeStyle = 'straight';
                styles.curved = null;
                styles.noEdgeStyle = null;
                break;
        }

        return styles;
    }
}
