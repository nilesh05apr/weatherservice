'use strict';
const controller = require("./controller");

module.exports = (app) => {
    app.route("/about").get(controller.about);
    app.route("/weather").get(controller.weather);
};