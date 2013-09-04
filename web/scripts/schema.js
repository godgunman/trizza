var pg = require('pg').native
  , connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/dailyjs'
  , client
  , query;

client = new pg.Client(connectionString);
client.connect();
query = client.query('CREATE TABLE users (email TEXT)');
query.on('end', function() { client.end(); });
