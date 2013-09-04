var pg = require('pg');

exports.subscribe = function(req, res){
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        client.query('INSERT INTO users(email) VALUES($1)', req.body.email, function(err, result) {
            done();

            if(err)
                return console.error(err);

            res.status(200);
        });
    });
};
