const request = require('request');

const lat = process.env.LAT;
const lon = process.env.LON;
const key = process.env.APIKEY;

const APIURL = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${lat},${lon}`;

var weather = {
    find : (req,res,next) => {
        request(APIURL,
        (error, resp, body) => {
            if(!error && resp.statusCode==200){
                resp = JSON.parse(body);
                res.send(resp)
            }else{
                console.log(resp.statusCode)
                res.send(`Status returned: ${resp.statusCode}`)
            }
        })
    }
}


module.exports = weather;