const express = require('express');
const fs = require('file-system');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/about', (req, res) => {
    res.sendfile("about.html", {root:__dirname})
})

app.get('data', (req, res) => {
    // SQL Query
    // const Query = `SELECT * FROM student;`
})

app.post('/post', (req, res) => {
    console.log(req);
    console.log(res);
    
    //
})

app.listen(8080, () => {
    console.log('port listen on 8080')
})