let properties = require("../package.json");

let weather = require("../service/weather");
let logger = require("../logs/logging");

let controllers = {
    health: (req, res) => {
        logger("Health")
        res.json({"status":"OK"})
    },
    about: (req, res) => {
        logger("About")
        let aboutInfo ={
            name: properties.name,
            description: properties.description,
            author: properties.author 
        }
        res.json(aboutInfo);
    },
    weather: (req, res) => {
        logger("Weather")
        weather.find(req, res, (err, weath) => {
            if(err)
                res.send(err);
             res.json(weath);
        });
    },
};

module.exports = controllers;