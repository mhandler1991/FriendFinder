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

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// *******************
// Listener
// *******************

app.listen(PORt, function() {
    console.log("Listening on PORT: ", PORT);
})