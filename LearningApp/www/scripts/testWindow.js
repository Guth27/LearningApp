(function () {
    document.getElementById("item_left").addEventListener("drag", jsPlumb.ready(function () {
        jsPlumb.connect({
            source: "item_left",
            target: "item_right",
            endpoint: "Rectangle"
        });
    }));
})();