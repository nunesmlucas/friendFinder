
var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });


    app.post("/api/friends", function (req, res) {
        friendsData.push(req.body);
        // res.json(true);
    });

    //   app.post("/api/clear", function(req, res) {
    //     // Empty out the arrays of data

    //     res.json({ ok: true });
    //   });
};
