﻿(function () {
    jsPlumb.ready(function () {
        var common = {
            isSource: true,
            isTarget: true,
            connector: ["Straight"],
            hoverPaintStyle: { outlineStroke: "red", strokeWidth: 3 },
            connectorStyle: { outlineStroke: "red", strokeWidth: 3 },
            connectorHoverStyle: { strokeWidth: 3 }
        };

        jsPlumb.addEndpoint("item_1", {
            anchors: ["Left"]
        }, common);
        jsPlumb.addEndpoint("item_1", {
            anchors: ["Right"]
        }, common);
        jsPlumb.addEndpoint("item_2", {
            anchors: ["Left"]
        }, common);
        jsPlumb.addEndpoint("item_2", {
            anchors: ["Right"]
        }, common);
        jsPlumb.addEndpoint("item_3", {
            anchors: ["Left"]
        }, common);
        jsPlumb.addEndpoint("item_3", {
            anchors: ["Right"]
        }, common);
        jsPlumb.addEndpoint("item_4", {
            anchors: ["Left"]
        }, common);
        jsPlumb.addEndpoint("item_4", {
            anchors: ["Right"]
        }, common);
    });
})();