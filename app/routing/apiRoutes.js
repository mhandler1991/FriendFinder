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
    app.post('/api/friends', function (req, res) {

        // Console Log User Input
        console.log("Request Body: ", req.body);
        console.log("Request Name: ", req.body.name);
        console.log("Request Photo: ", req.body.photo);
        console.log("Request Scores: ", req.body.scores);

        // Define Users Score Arr Var

        // User Input Score
        var usertotal = 0;
        // Name of New Friend
        var bestmatchName = '';
        // Difference between friend & User
        var bestmatch = 100;
        // Friend Score
        var friendtotal = 0;
        // 
        var bestMatchData = '';

        // Find User Total
        //****************
        for (var i = 0; i < req.body.scores.length; i++) {
            usertotal += parseInt(req.body.scores[i], 10);
        }
        console.log("User Total: ", usertotal);
        //****************

        // Find Best Match
        //****************
        for (var i = 0; i < friends.length; i++) {
            // Friend Comparison 
            console.log(friends[i].scores);
            // Calculate Total

            for (var j = 0; j < friends[i].scores.length; j++) {
                friendtotal += friends[i].scores[j];
            }

            console.log("Friend Total: ", friendtotal);

            // Compare this Friend to User
            var dif = Math.abs(friendtotal - usertotal);
            console.log(dif);

            // Determine if this friend is the best match for the user
            if (dif < bestmatch) {

                bestmatch = friendtotal;
                bestmatchName = friends[i].name;
                bestMatchData = friends[i];
                friendtotal = 0;

            } else {}

            console.log('*************');
            console.log('Result');
            console.log('*************');
            console.log(bestmatch);
            console.log(bestmatchName);
            friendtotal = 0;

        }

        // Respond
        res.json(bestMatchData)

    });

}