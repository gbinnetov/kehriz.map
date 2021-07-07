define([
    "dijit/_WidgetBase",
    "dojo/_base/declare"
], function (
    _WidgetBase,
    declare) {
    return declare([_WidgetBase], {
        options: {
            view: null,
            map: null,
        },
        constructor: function (options) {
            declare.safeMixin(this.options, options);
            this.set("view", this.options.view);
            this.set("map", this.options.map);
        },
        runCommand: function (pt) {
            function fadeVisibilityOn(layer) {
                    console.log(layer.layer);
                switch (layer.layer.id) {
                    case "2": layer.title = "Point"; break;
                    case "1": layer.title = "Line"; break;
                   
                    default:
                }

            }


            this.view.when().then(function () {

                pt.operationalItems.forEach(function (item) {

                    fadeVisibilityOn(item);
                });
            });

        }
    });
});