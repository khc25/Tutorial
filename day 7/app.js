//express
const express = require('express');
const app = express();

//req.header
const cookieParser = require('cookie-parser');
//req.query
const bodyParser = require('body-parser');

//view engine
const cors = require('cors');

//config
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());


//SQL
const connectionString = "postgres://peodzzpi:Bt26r3XYTIzcb09VlwSuYxHK_O8HzUkb@isilo.db.elephantsql.com:5432/peodzzpi";
const { Pool } = require('pg')
const pool = new Pool ({
    connectionString: connectionString,
})





//file system usage: readfile / writefile
const fs = require('fs')
var path = require('path');

//Network monitor
const logger = require('morgan');

// fs write file
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

app.use(logger('dev', {stream: accessLogStream}));

// Error Handling
// app.use((err) => {
//     console.log(err);
//     res.status(500);
//     res.send("Error");
// })


//if(Method === 'GET' && params === "about") {}

app.get('/', async (req, res) => {

    //promise (use await async) SQL query
     const result = await pool.query("SELECT * FROM test" );
     // SELECT name FROM test; get Colume name

     res.send(result.rows);

    //  pool.query("SELECT * FROM test" , (err, res) => {
    //     console.log(res.rows);
    //   })
})

app.post('/post', (req, res) => {
    //get request data: req.query / req.body / req.params
    const q = req.query;
    console.log(req.query);

    //SQL post query , Structure: pool.query('query', [value1, value 2,...] , function());
    pool.query(`INSERT INTO test (name, email, msg) VALUES ($1, $2, $3) RETURNING id`,[q.name, q.email, q.msg], (err, res) => {
        if(err) {
            console.log(err);
        } else {
            console.log('success');

        }
        // pool.end();
    })
})



//all method
app.all('/all',(req, res) => {
    
})

//app.get sigle row

//app.put

//app.delete


//set port
app.listen(8080, () => {
    console.log('port listen on 8080')
})