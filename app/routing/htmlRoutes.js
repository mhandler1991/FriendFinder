// *******************
// Requirements
// *******************

var path = require('path');

// *******************
// Routing
// *******************

// Routing to Survey HTML Page
app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
});

// Default Routing to Home Page
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
})