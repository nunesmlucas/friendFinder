
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
        res.json(true);
        // res.json(true);
    });

    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        friendsData.length = [];
        res.json({ ok: true });
    });
};
