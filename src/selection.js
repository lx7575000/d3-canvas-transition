import * as d3 from 'd3-selection';
import {CanvasElement} from './element';
import resolution from './utils';


function selection (context, factor) {
    if (!factor) factor = resolution();
    var s = d3.selection();
    s._groups[0][0] = new CanvasElement(context, factor);
    return s;
}

selection.prototype = d3.selection.prototype;


export default selection;