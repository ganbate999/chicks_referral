const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var path = require('path');
const app = express();

var corsOptions = {
  origin: "*"
};

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

  // simple route
require('./routes/flights.routes')(app);
 

// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to flights application." });
// });

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
