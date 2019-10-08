// without jQuery (doesn't work in older IEs)
document.addEventListener('DOMContentLoaded', function () {
    console.log("JS Loaded")
    adjustBodyPad();
}, false);

var adjustBodyPad = function () {
    var nav1 = document.querySelector('.user-options-nav');
    var nav2 = document.querySelector('.top-nav-header');
    var navTotal = nav1 + nav2;
    console.log("nav total:" + navTotal)
    document.querySelector('body').style.paddingTop(`${navTotal} + px`);
}