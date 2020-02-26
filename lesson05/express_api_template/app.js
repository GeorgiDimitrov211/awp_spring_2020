/**** External libraries ****/
const express = require('express'); // The express.js library for implementing the API
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

/**** Configuration ****/
const appName = "Express API Template"; // Change the name of your server app!
const port = process.env.PORT || 8080; // Pick port 8080 if the PORT env variable is empty.
const app = express(); // Get the express app object.

app.use(bodyParser.json()); // Add middleware that parses JSON from the request body.
app.use(morgan('combined')); // Add middleware that logs all http requests to the console.
app.use(cors()); // Avoid CORS errors. https://en.wikipedia.org/wiki/Cross-origin_resource_sharing

/**** Some test data ****/
const data = [
    {
        "id": 0,
        "title": "Pizza",
        "description": "Pizza is nice",
        "ingredients": ["tomato", "cheese"],
        "cooking_time": 30
    },
    {
        "id": 1,
        "title": "Baked potatoes with fried eggs",
        "description": "Served with baked beans",
        "ingredients": ["cheese", "potatoes", "eggs", "beans"],
        "cooking_time": 60
    },
    {
        "id": 2,
        "title": "Vegetable quiche",
        "description": "With grated courgette and cheese",
        "ingredients": ["cheese", "courgette"],
        "cooking_time": 70
    }
];

/**** Routes ****/

// Return all recipes in data
app.get('/api/recipes', (req, res) => res.json(data));

// Return the recipe in data with its id equal to ':id' in the route below.
app.get('/api/recipes/:id', (req, res) => {
    const id = req.params.id;
    const recipe = data.find(e => e.id === parseInt(id));
    res.json(recipe);
});

app.post('/api/recipes', (req, res) => {
    const title = req.body.title;
    const desc = req.body.description;
    const newRecipe = {
        title: title,
        description: desc
    };
    data.push(newRecipe);
    res.json({msg: "Recipe added", newRecipe: newRecipe});
});

app.post('/api/recipes/:id/ingredients', (req, res) => {
    // TODO: Add new ingredient
});

// TODO: Example of handling PUT
// TODO: Example of handling DELETE

/**** Start! ****/
app.listen(port, () => console.log(`${appName} API running on port ${port}!`));