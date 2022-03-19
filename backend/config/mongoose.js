const mongoose = require('mongoose')

mongoose.connect('mongodb://Albert:root@localhost:27017/db-mongoose?authSource=admin');


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error: '));
db.once('open', ()=>console.log('Server database terhubung'));