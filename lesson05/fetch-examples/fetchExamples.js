// This fetch works on node.js. Its the same API as fetch in the browser.
// Remember to do a "npm install" before running this example.
const fetch = require('node-fetch');

function GetData() {
    fetch('https://krdo-todo-api.herokuapp.com/api/tasks')
    .then(response => response.json()) // Turn JSON into an object
    .then(data => {
        console.log("Printing the tasks:", data);
    });
}

async function GetDataUsingAwait() {
    const response = await fetch('https://krdo-todo-api.herokuapp.com/api/tasks');
    const data = await response.json();
    console.log("Printing the tasks:", data);
}

async function PostDataUsingAwait() {
    const response = await fetch('https://krdo-todo-api.herokuapp.com/api/tasks', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            text: "Write this example",
            done: false
        })
    });
    const data = await response.json();
    console.log("Printing the response:", data);
}


// Run the examples!
GetData();
GetDataUsingAwait().then(_ => console.log("Done GET!"));
PostDataUsingAwait().then(_ => console.log("Done POST!"));
