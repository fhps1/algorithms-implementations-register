"use strict";
function imp(a,b) {
    return a<=b
}

console.log(
    imp(true,true) + "\n"+
    imp(true,false) + "\n"+
    imp(false,true) + "\n"+
    imp(false,false) + "\n"
);
