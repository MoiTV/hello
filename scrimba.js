const fetch = require('node-fetch');

async function getPost() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos/1'
        );

        const data = await response.json();

        console.log(data);
    } catch (error) {
        throw error;
    } finally {
        console.log('done');
    }
}

getPost();