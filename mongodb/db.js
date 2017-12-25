'use strict';

const mongoose = require('mongoose');

// Connection URL
const DB_URL  = 'mongodb://localhost:27017/food';

// Use connect method to connect to the Server
mongoose.connect(DB_URL,{useMongoClient:true});
const db = mongoose.connection;
db.once('open' ,() => {
	console.log('MongoDb is connected.');
})

db.on('error', (error) => {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
});

db.on('close', () => {
    console.log('MongoDb is closed.');
    mongoose.connect(config.url, {server:{auto_reconnect:true}});
});

module.exports = db;

