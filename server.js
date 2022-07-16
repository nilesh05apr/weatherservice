const express = require('express');
const app = express();
require('dotenv').config()

const port = process.env.PORT || 5000;

const routes = require('./api/routes');
routes(app);

app.listen(port,()=> {
    console.log(`Server running at http://localhost:${port}`)
})