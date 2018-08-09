(function () {

    jsPlumb.ready(function () {
        jsPlumb.draggable("item_left");
        jsPlumb.draggable("item_right", {grid:[20,20]});       
    });
})();