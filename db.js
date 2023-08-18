/** Database for lunchly */

const { Client } = require("pg");

const client = new Client({
    user: 'baer',
    host: 'localhost',
    port: 5432,
    password: 'baer',
    database: 'lunchly'
  });
  
  client.connect();
  
  module.exports = client;