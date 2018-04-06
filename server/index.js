const express = require('express')
const bodyParser = require('body-parser')
const port = 7574
const massive = require('massive')
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(connection => {
    app.set('db', connection);
    console.log('db connected');
})













app.listen(port, () => console.log(`You are listening to the sweet sounds of port ${port}`));