// 3. Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page.

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