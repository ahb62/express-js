//const theMorgan = morgan('combined');
const express = require('express');
const {Pool} = require('pg');
const app = express();
const PORT = 3000;
const myDbData = 
{   
    user: "postgres",
    host: "localhost",
    database: "crud",
    password: "root",
    port: "6000"
}
const thePostgresqlPool = new Pool(myDbData);
thePostgresqlPool.connect();
app.listen(PORT, () => console.log("server on port " + PORT));

app.get('/', (req, res) => 
{
    res.json("Hello World!");
    console.log("Hello World from the console")
});


thePostgresqlPool.query('SELECT * FROM clients')

    .then(response => {

        console.log(response.rows)

        thePostgresqlPool.end()

    })

    .catch(err => {

        thePostgresqlPool.end()

    })