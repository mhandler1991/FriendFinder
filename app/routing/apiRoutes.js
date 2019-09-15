//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// *******************
// Requirements
// *******************

var path = require('path');
var friends = require('../data/friends');

// *******************
// EXPORT
// *******************

module.exports = function (app) {

    // API GET
    // Routing for API friends
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

     // API POST
     app.post('/app/friends', function (req, res) {
        res.json(true)
        console.log(res);
     });

}