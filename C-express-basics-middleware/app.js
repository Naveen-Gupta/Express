const express = require('express');
const port = 3000;

const app = express();

const logger = (req, res, next) =>{
    console.log("logging..");
    next();
}//logger

app.use(logger);

app.get('/', (req, res) =>{
    res.send('Hello World!!!..');
});//app.get


app.listen(port, ()=>{
    console.log("server is running now.......")
});//listen