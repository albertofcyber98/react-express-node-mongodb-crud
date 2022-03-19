require('./config/mongoose');
const express = require('express');
// const path = require('path');
const app = express();
const logger = require('morgan');
const  product = require('./routes/routes');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use('/', product);
app.use((req, res, next)=>{
    res.status(404);
    res.send({
        status: 'Failed',
        message: 'Resource '+ req.originalUrl + ' Not Found'
    })
})
app.listen(3000, ()=> console.log("Server is up and running : http://localhost:3000"));