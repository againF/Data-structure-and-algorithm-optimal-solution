var processor = {
    timeoutId: null,
    performProcessing: function() {

    },
    process: function() {
        clearTimeout(this.timeoutId);
        var that = this;
        this.timeoutId = setTimeout(function() {
            that.performProcessing();
        }, 100);
    }
}
processor.process()
----------------------------------------------------------
function throttle(method, context) {
    clearTimeout(method.tid);
    method.tid = setTimeout(function() {
        method.call(context);
    }, 100)
}

function resizeDiv() {
    var div = document.querySelector("#myDiv");
    div.style.height = div.offsetWidth + "px";
}

window.onresize = function() {
    throttle(resizeDiv)
}
-------------------------------------------------------- 