var friends = require("../data/Friend.js");
let scoreTot = 0;
let friendScore = 0;
let arrScores = [];
let newUserData = [];

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        
        res.json(friends);
        console.log(res);
    });
    
    app.post("/api/friends", function (req, res){

        for (let i = 0; i < friends.length; i++) {

            scoreTot = (friends[i].scores);
        
            console.log(scoreTot);
            friendScore = scoreTot.reduce(function (a, b) {
                return a + b
            }, 0);
        }
        arrScores.push(friendScore);
        console.log(arrScores); 
        
        goal = arrScores;
        let closest = arrScores.reduce(function(prev, curr) {
            return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
          });
        console.log(closest);
        
        friends.push(req.body);
        res.json(friends[closest]);
    });
    }

    //issue is that it is console logging the whole array twice
    //also need to get the sum of the new friend and not a list of the array numbers smushed together