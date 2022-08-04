//const theMorgan = morgan('combined');
const { urlencoded } = require('express');
const express = require('express');
const {thePostgresqlPool} = require('./database.js');

    
// Initialize the backend
const app = express();
const PORT = 3000;
app.listen(PORT, () => console.log("server on port " + PORT));

// Middlewares
app.use(express.json());
app.use(urlencoded({extended: false}));
app.use(require('./routes/routes.js')); 

// Connecting the database
thePostgresqlPool.connect();


