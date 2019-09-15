// 2. Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.

// *******************
// Requirements
// *******************

var express = require('express');
var path = require('path');

// *******************
// Express
// *******************

// Create express server
var app = express();

// Set PORT for server
const PORT = process.env.PORT || 3000;

// Setup Express URL handleing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// *******************
// Requirements -- ROUTES
// *******************




// *******************
// Listener
// *******************

app.listen(PORt, function() {
    console.log("Listening on PORT: ", PORT);
})