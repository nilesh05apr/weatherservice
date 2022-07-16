let properties = require("../package.json");

let weather = require("../service/weather");

let controllers = {
    about: (req, res) => {
        let aboutInfo ={
            name: properties.name,
            description: properties.description,
            author: properties.author 
        }
        res.json(aboutInfo);
    },
    weather: (req, res) => {
        weather.find(req, res, (err, weath) => {
            if(err)
                res.send(err);
             res.json(weath);
        });
    },
};

module.exports = controllers;