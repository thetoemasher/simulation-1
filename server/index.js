const express = require('express')
const bodyParser = require('body-parser')
const port = 7574

const app = express();

app.use(bodyParser.json());













app.listen(port, () => console.log(`You are listening to the sweet sounds of port ${port}`));