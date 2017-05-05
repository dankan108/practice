/**
 * Created by dankan on 2017/3/4.
 */
function id(obj) {
    return document.getElementById(obj);
}
function bind(obj, ev, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(ev, fn, false);
    } else {
        obj.attachEvent('on' + ev, function() {
            fn.call(obj);
        });
    }
}
function view() {
    return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
    };
}
function addClass(obj, sClass) {
    var aClass = obj.className.split(' ');
    if (!obj.className) {
        obj.className = sClass;
        return;
    }
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) return;
    }
    obj.className += ' ' + sClass;
}

function removeClass(obj, sClass) {
    var aClass = obj.className.split(' ');
    if (!obj.className) return;
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) {
            aClass.splice(i, 1);
            obj.className = aClass.join(' ');
            break;
        }
    }
}
function fuload() {
//            var oW = document.getElementById("welcome");
    var oW = document.querySelector("#welcome");
    var now = new Date().getTime();
    var bimgload = true;
    var btime = false;
    bind(oW,"transitionend",end);
    bind(oW,"webkitTransitionEnd",end);
    var otimer = 0;
    otimer = setInterval(function () {
        if(new Date().getTime()-now >2000){
            btime= true;
            if(bimgload&&btime){
                oW.style.opacity=0;
                clearInterval(otimer);
            }
        }
    },1000);
    function end() {
        removeClass(oW,"show");
    }

}