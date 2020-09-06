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
const connectionString = "postgres://gprdgmci:1h92OZ3Kom7I1_6SlS2etrxs0S76o7zV@lallah.db.elephantsql.com:5432/gprdgmci";
const { Pool } = require('pg')
const pool = new Pool ({
    connectionString: connectionString,
})


app.get('/', async (req, res) => {
    //promise (use await async) SQL query
    const result = await pool.query("SELECT * FROM posts" );
    // SELECT name FROM test; get Colume name

    res.send(result.rows);
})

app.post('/', (req, res) => {
    console.log(req.body);
    const q = req.body
    pool.query(`INSERT INTO posts (content) VALUES ($1) RETURNING id`,[q.content], (err, res) => {
        if(err) {
            console.log(err);
        } else {
            console.log('success');
        }
    })
    res.send('Success')
})

app.delete('/' , (req, res) => {
    var q = req.query;
    pool.query("DELETE FROM posts WHERE id = $1", [q.id], (err, res) => {
        if(err) {
            console.log(err);
        } else {
            console.log('Delete success')
        }
    })
    res.send('Deleted')
})

const PORT = 8080
//set port
app.listen(PORT, () => {
    console.log('port listen on 8080')
})



