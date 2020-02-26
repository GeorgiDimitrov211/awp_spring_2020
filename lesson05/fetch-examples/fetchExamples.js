// This fetch works on node.js. Its the same API as fetch in the browser.
// Remember to do a "npm install" before running this example.
const fetch = require('node-fetch');

function GetData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) // Turn JSON into an object
    .then(data => {
        console.log("Printing the tasks:", data);
    });
}

async function GetDataUsingAwait() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log("Printing the tasks:", data);
}

async function PostDataUsingAwait() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: {
            "text": "This is some text"
        }
    });
    const data = await response.json();
    console.log("Printing the response:", data);
}


// Run the examples!
GetData();
GetDataUsingAwait().then(_ => console.log("Done GET!"));
PostDataUsingAwait().then(_ => console.log("Done POST!"));
