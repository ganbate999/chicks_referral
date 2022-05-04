var fs = require('fs');

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };

  exports.flightsSet = (req, res) => {
    var referral = req.query.referral;
    var address = req.query.address;
    var mintCount = req.query.mintCount;
    console.log("referral code -- " + referral + " -- address -- " + address + " -- mintCount -- " + mintCount);

    return;
  };


  exports.flightsget = (req, res) => {

    Flights.find(
      { })
      .sort( { "departs" : 1} )
      .exec((err, flights) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        var now_time = new Date().getTime();
        console.log(now_time);
        var current_flight = [];
        for(var i=0; i < flights.length; i++)
        {
          if(flights[i].departs){
            var flight_date = Date.parse(flights[i].departs);          
            var a = flights[i];
            var statu= false;
            if(flight_date < now_time){
              statu = true;
            }
            current_flight.push({...a._doc, current_date: statu});
          }
        }
        res.render('index', { current_flight});
        // res.status(200).send(flights);
        // res.status(200).send({ state:"200", message: "match panel", data: flights });  
        return;
        
      });
  };
  
  exports.flightsnew = (req, res) => {
    res.render('new');
    return;
  };

  exports.flightsadd = (req, res) => {

    const flight = new Flights({
      airline: req.body.airline,
      airport: req.body.airport,
      flightsno: req.body.flightsno,
      departs: req.body.departs
    });
  
    flight.save((err, flight) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.status(200).send({ status: "success" });
    });
    
  };
  
  exports.flightsedit = (req, res) => {
    res.status(200).send("flightsedit Content.");
  };

  exports.flightsremove = (req, res) => {
    res.status(200).send("flightsremove Content.");
  };