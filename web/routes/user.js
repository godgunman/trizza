var pg = require('pg');
var mongoose = require ("mongoose"); // The reason for this demo.

var uristring = 
  process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://localhost/TrizzaMongoose';

// The http server will listen to an appropriate port, or default to
// port 5000.
var theport = process.env.PORT || 5000;

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

// This is the schema.  Note the types, validation and trim
// statements.  They enforce useful constraints on the data.
var subscriberSchema = new mongoose.Schema({
  email: { type: String, trim: true}
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'SubscriberModel' collection in the MongoDB database
var SubscriberModel = mongoose.model('SubscriberModel', subscriberSchema);

exports.subscribe = function(req, res){
    console.log(req.body);

    // Creating one user.
    var obj = new SubscriberModel ({
      email: req.body.email
    });
    
    // Saving it to the database.  
    obj.save(function (err) {if (err) console.log ('Error on save!')});
};

exports.listSubscriber = function(req, res) {
    SubscriberModel.find({}, function (err, teams) {
        if(err){
            console.log(err);
        }else{
            console.log(teams);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(JSON.stringify(teams));
            res.end();
        }
    })// end Team.find
}
