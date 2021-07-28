const fetch = require('node-fetch');

async function getJsonData() {
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await responce.json();

    console.log(data[0].id);
}

getJsonData();