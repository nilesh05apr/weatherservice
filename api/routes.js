'use strict';
const controller = require("./controller");

module.exports = (app) => {
    app.route("/health").get(controller.health);
    app.route("/about").get(controller.about);
    app.route("/weather").get(controller.weather);

};