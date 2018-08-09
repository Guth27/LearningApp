(function () {
    jsPlumb.ready(function () {
        jsPlumb.connect({
            source: "item_left",
            target: "item_right",
            endpoint: "Rectangle"
        });
    });
})();