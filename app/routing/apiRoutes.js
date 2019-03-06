
var friendsData = require("../data/friends");


// =============================================================================== 
// ROUTING
// ===============================================================================

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
        console.log("IN GET API FRIENDS");
    });


    app.post("/api/friends", function (req, res) {
        friendsData.push(req.body);

        res.json(friendsData);
    });

    app.get("/api/friendmatch/:name", function (req, res) {

        var user_name = req.params.name;
        var user;
        // find the user object
        // go through friend's data until the user object is found then user = friendData[i]
        for (var i = 0; i < friendsData.length; i++) {
            if (friendData[i].name === user_name) {
                user = friendData[i];
            }
        }

        // you need a place to store the minimum difference
        var min = 99999999999;
        // you need a place to store the matching friend
        var friendMatch;

        // go through friend's data to find the minimum difference
        for (var j = 0; j < friendsData.length; j++) {
            var friend = friendData[j];
            // calculate the difference
            var scoreDifference = Math.abs(user.totalScore - friend.totalScore)

            // if the difference is less than minimum,
            if (scoreDifference < min && user_name !== friend.name) {
                // store the min and the friendMatch
                min = scoreDifference;
                friendMatch = friend;
            }
        }


        res.json(friendMatch);
    });


    // app.post("/api/clear", function (req, res) {
    //     // Empty out the arrays of data
    //     friendsData.length = [];
    //     res.json({ ok: true });
    // });
};
