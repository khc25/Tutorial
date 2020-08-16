const axios = require("axios");

//.then .catch (Old)
Axios.get('http://localhost:8080').then((res) => {
    console.log(res);
}).catch(err => {
    console.log(err)
})


//async await (New)

async function getRequest() {
    let request = await axios.get('http://localhost:8080');

    console.log(request)
} 

getRequest();