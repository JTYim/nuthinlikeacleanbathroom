var IPOs = require('./IPOsModel');

module.exports = {
  //Get all funds
  get: function(req, res) {
    IPOs.get(function(err, results) {
      if(err) {
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    });
  }
};
