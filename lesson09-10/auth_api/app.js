/**
 * Disclaimer:
 * This app demonstrates how to make an authenticated API with password protected users.
 * This app DOES NOT demonstrate best practices but only how to use the individual libraries.
 * Use the code below at your own discretion. Read the comments!
 */

/**** Libraries ****/
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const checkJwt = require('express-jwt');    // Validates access tokens automatically

/**** Configuration ****/
const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(bodyParser.json()); // Parse JSON from the request body
app.use(morgan('combined')); // Log all requests to the console

// Open paths that do not need login. Any route not included here is protected!
let openPaths = [
    { url: '/api/users/authenticate', methods: ['POST'] }
];

// Validate the user using authentication. checkJwt checks for auth token.
const secret = process.env.SECRET || "the cake is a lie";
app.use(checkJwt({ secret: secret }).unless({ path : openPaths }));

// This middleware checks the result of checkJwt
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') { // If the user didn't authorize correctly
        res.status(401).json({ error: err.message }); // Return 401 with error message.
    } else {
        next(); // If no errors, forward request to next middleware or route
    }
});

/**** Data ****/
const data = [
    {id: 1, name: "Garfield", hobbies: ["Purring", "Sleeping", "Eating"]},
    {id: 2, name: "Tom", hobbies: ["Purring", "Eating"]},
    {id: 3, name: "Felix", hobbies: ["Sleeping", "Eating"]},
];

/**** Routes ****/
const usersRouter = require('./routers/users_router')(secret);
app.use('/api/users', usersRouter);

const kittenRouter = require('./routers/kitten_router')(data);
app.use('/api/kittens', kittenRouter);

/**** Start ****/
app.listen(port, () => {
    console.log(`Auth Example API running on port ${port}!`)
});



