const controller = require("../controllers/flights.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // app.get("/", controller.flightsget);
  app.get("/add", controller.flightsSet);
  app.post("/add", controller.flightsSet);
  // app.post("/", controller.flightsget);
  // app.get("/new", controller.flightsnew);
  // app.post("/add", controller.flightsadd);

};