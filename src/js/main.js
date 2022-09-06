import graph from './graph';
import header from './header';
import {modal} from './modal';
import scroll from './scroll';
import search from './search';
import carousel from './carousel';
window.addEventListener('DOMContentLoaded', ()=>{
    "use strict";
    header();
    graph();
    modal();
    scroll();
    search();
    carousel();
});