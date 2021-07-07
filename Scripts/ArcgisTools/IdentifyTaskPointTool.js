define([
  "dijit/_WidgetBase",
  "dojo/_base/declare",
  "esri/tasks/IdentifyTask",
  "esri/tasks/support/IdentifyParameters",
  "esri/Graphic",
], function (_WidgetBase, declare, IdentifyTask, IdentifyParameters, Graphic) {
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
        console.log(pt)
      view.hitTest(pt).then(function (response) {
        console.log(response.results);

        view.popup = {
          dockEnabled: true,
          dockOptions: {
            buttonEnabled: false,
            breakpoint: false,
            position: "bottom-right",
          },
        };
        if (response.results[0].graphic.sourceLayer.id == 2) {
          view.popup.open({
            title: "<b>Məlumatlar (Point)</b>",
            //  location: event.mapPoint
          });
          view.popup.content =
            "<table class='table table-striped'>" +
            "<tbody>" +
            "<tr>" +
            "<th scope='row'>OBJECTID</th>" +
            "<td>" +
            response.results[0].graphic.attributes.OBJECTID +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>OBJ_ID</th>" +
            "<td>" +
            response.results[0].graphic.attributes.OBJ_ID +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>KAHRIZ_AZE</th>" +
            "<td>" +
            response.results[0].graphic.attributes.KAHRIZ_AZE +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>KAHRIZ_ENG</th>" +
            "<td>" +
            response.results[0].graphic.attributes.KAHRIZ_ENG +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>NAME</th>" +
            "<td>" +
            response.results[0].graphic.attributes.NAME +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>YASAYIS_ME</th>" +
            "<td>" +
            response.results[0].graphic.attributes.YASAYIS_ME +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>QUYU_NOVU</th>" +
            "<td>" +
            response.results[0].graphic.attributes.QUYU_NOVU +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>INDEX_</th>" +
            "<td>" +
            response.results[0].graphic.attributes.INDEX_ +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Geostruktu</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Geostruktu +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Hidroloji_</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Hidroloji_ +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Rayon</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Rayon +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>X</th>" +
            "<td>" +
            response.results[0].graphic.attributes.X +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>X_DD</th>" +
            "<td>" +
            response.results[0].graphic.attributes.X_DD +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Y_DD</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Y_DD +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>MUTLEQ_HUN</th>" +
            "<td>" +
            response.results[0].graphic.attributes.MUTLEQ_HUN +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Uzunluq</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Uzunluq +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Su_serfi</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Su_serfi +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Su_toplayi</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Su_toplayi +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Kehriz_tex</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Kehriz_tex +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Legv_olunm</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Legv_olunm +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Qidalanma_</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Qidalanma_ +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Kehriz_ist</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Kehriz_ist +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Son_temir_</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Son_temir_ +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Qeydlər</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Qeydlər +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Yasayis__1</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Yasayis__1 +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Rayon_ENG</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Rayon_ENG +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Yasayis__2</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Yasayis__2 +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Yasayis__3</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Yasayis__3 +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Yasayis_ad</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Yasayis_ad +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Yasayis__4</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Yasayis__4 +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Wall_type</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Wall_type +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Geostructu</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Geostructu +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Absolute_a</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Absolute_a +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Lentgh</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Lentgh +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Water_disc</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Water_disc +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Water_gate</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Water_gate +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Technical_</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Technical_ +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Danger</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Danger +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Source_of_</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Source_of_ +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Date_of_op</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Date_of_op +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Last_repai</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Last_repai +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Notes</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Notes +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<th scope='row'>Hidrologic</th>" +
            "<td>" +
            response.results[0].graphic.attributes.Hidrologic +
            "</td>" +
            "</tr>" +
            "</tr>" +
            "</tbody>" +
            "</table>";
        } else if (response.results[0].graphic.sourceLayer.id == 1) {
          view.popup.open({
            title: "<b>Məlumatlar (Line)</b>",
            //  location: event.mapPoint
          });
          view.popup.content =
            "<table class='table table-striped'>" +
            "<tbody>" +
            "<tr>" +
            "<th scope='row'>OBJECTID</th>" +
            "<td>" +
            response.results[0].graphic.attributes.OBJECTID +
            "</td>" +
            "</tr>" +

            "<tr>" +
            "<th scope='row'>TUNNEL_ADI</th>" +
            "<td>" +
            response.results[0].graphic.attributes.TUNNEL_ADI +
            "</td>" +
            "</tr>" +

            "<tr>" +
            "<th scope='row'>TUNNEL_NAM</th>" +
            "<td>" +
            response.results[0].graphic.attributes.TUNNEL_NAM +
            "</td>" +
            "</tr>" +

            "<tr>" +
            "<th scope='row'>UZUNLUQ</th>" +
            "<td>" +
            response.results[0].graphic.attributes.UZUNLUQ +
            "</td>" +
            "</tr>" +

            "<tr>" +
            "<th scope='row'>LENGTH</th>" +
            "<td>" +
            response.results[0].graphic.attributes.LENGTH +
            "</td>" +
            "</tr>" +

            "<tr>" +
            "<th scope='row'>RAYON</th>" +
            "<td>" +
            response.results[0].graphic.attributes.RAYON +
            "</td>" +
            "</tr>" +

            "<tr>" +
            "<th scope='row'>DISTRICT</th>" +
            "<td>" +
            response.results[0].graphic.attributes.DISTRICT +
            "</td>" +
            "</tr>" +

            "<tr>" +
            "<th scope='row'>SHAPE_Leng</th>" +
            "<td>" +
            response.results[0].graphic.attributes.SHAPE_Leng +
            "</td>" +
            "</tr>" +

            "</tbody>" +
            "</table>";
        }
        else{
          
        }

        console.log(response);
      });
    },
  });
});
