const express = require("express")
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const db = require("./app/config/db.config.js");

db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
  });

require('./app/route/customer.route.js')(app);

// Create a Server
var server = app.listen(3000, 'localhost', function () {
 
    var host = server.address().address
    var port = server.address().port
   
    console.log("App listening at http://%s:%s", host, port)
});
