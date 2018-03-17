var friend = require("../data/friend");

module.exports = function(app) {
   app.get("/api/friend", function(req, res) {
    res.json(friend);
  });


  app.post("/api/friend", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
      friend.push(req.body);

     
  
  });


};
