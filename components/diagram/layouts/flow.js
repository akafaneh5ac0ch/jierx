import {DLayout} from './layout';
import mx from '../mxgraph';

const {mxHierarchicalLayout, mxConstants} = mx;

export class DFlowLayout extends DLayout {
    defaults() {
        return {
            ...super.defaults(),
            type: 'horizontal',
            interHierarchySpacing: 30,
            interRankCellSpacing: 50,
        }
    }

    _getLayout(graph) {
        const {type, interHierarchySpacing, interRankCellSpacing} = this.get();
        const direction = type === 'horizontal' ? mxConstants.DIRECTION_WEST : mxConstants.DIRECTION_NORTH;
        const layout = new mxHierarchicalLayout(graph, direction);

        layout.interHierarchySpacing = +interHierarchySpacing;
        layout.interRankCellSpacing = +interRankCellSpacing;

        return layout;
    }
}
