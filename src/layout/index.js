import * as $ from "jquery";

import layout from './layout.html'
export default class Layout{
    render(){
        $('body').html(layout)
    }
}