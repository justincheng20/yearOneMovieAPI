const { Client } = require("pg");

const client = new Client("postgresql:///movies");

client.connect();


module.exports = client;
