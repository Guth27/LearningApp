(function () {
    jsPlumb.ready(function () {
        var common = {
            connector: ["Straight"],
            anchor: ["Left", "Right"],
            endpoint: "Dot"
        };

        jsPlumb.connect({
            source: "item_left",
            target: "item_right",
            paintStyle: { stroke: "lightgray", strokeWidth: 3, },
            endpointStyle: { fill: "lightgray", outlineStroke: "darkgray", outlineWidth: 2 },
            overlays: [
                ["Arrow", { width: 20, length: 20, location: 0.55 }]
            ]
        }, common);

        jsPlumb.addEndpoint("item_left", {
            anchors: ["Left"]
        });
        jsPlumb.addEndpoint("item_right", {
            anchors: ["Right"]
        });
    });
})();