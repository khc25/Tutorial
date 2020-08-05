class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        return `You name is ${this.name}, age is ${this.age}`;
    }
}

// {
//     name:'Brian',
//     show: function () {
//         return `Your name is ${this.name}`
//     },
// }

const name = `Simon`

const Wilson = new Person('Wilson', 24);
const Denis = new Person('Denis', 100);
// console.log(`first person is${Wilson.name}${Denis.name}`)

// console.log(Denis.getInfo())

const people =[];

people.push(Wilson);
people.push(Denis);

console.log(people)

const axios = require('axios')

//JQuery
// $.ajax
//JavaScript
const xhttp = new XMLHttpRequest();
xhttp.open


const Data = [];
//nodejs/ yarn 
axios.get(`https://ip-api.com`,{Denis}).then(res => {
    console.log(res)
    if(res.status === 200) {
        Data.push(res.data);
    }
}).catch((err) => { console.log(err)});

//<p id='demo'></p>
const Para = document.getElementById('demo')
Para.innerHTML(Data)

fetch('url').then(function(res) {
    console.log(res);
    console.log(res.data);
}.catch(function(err) {console.log(err)})


class XMLHttpRequest {
    constructor(){
        this.readyState = readyState;
        this.status = status;
        this.data = data;
    
    }

    onreadystatechange() {

    }
    responseText() {
        return this.data
    }

    send() {

    }
}

// {
//     'name':'',
//     age: ,
// }

//Basic RESTFUL API method
//get post put delete


// const Para = document.getElementsByTagName('p');
// Para.innerHTML(`first person is${Wilson.name}${Denis.name}`)


// const Brian = {
//     'name': "Brian",
//     'age' : 23
// }

