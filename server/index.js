const express = require('express');
const bodyParser = require('body-parser');
const port = 7574;
const massive = require('massive');
const controller = require('./controller');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(connection => {
    app.set('db', connection);
    console.log('db connected');
})

app.get('/api/inventory', controller.getAll);
app.get('/api/inventory/:id', controller.getById)
app.post('/api/product', controller.createProduct);
app.delete('/api/product/:id', controller.delete);
app.put('/api/product/:id', controller.update)










app.listen(port, () => console.log(`You are listening to the sweet sounds of port ${port}`));