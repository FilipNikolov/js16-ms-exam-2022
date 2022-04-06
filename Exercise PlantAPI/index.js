const config = require('./pkg/config');
require('./pkg/db');

const express = require('express');
const jwt = require('express-jwt');
const plants = require('./handlers/plants');
const plant

const api = express();

api.get('/api/v1/plant', plant.getAllPlants);
api.post('/api/v1/plant', plant.addPlant);
api.get('/api/v1/plant/:id', plant.getOnePlant);
api.put('/api/v1/plant/:id', plant.updatePlant);
api.delete('/api/v1/plant/:id', plant.removePlant);



api.listen(config.get('service').port, err => {
    if(err) return console.log(err);
    console.log(`Server started on port ${config.get('service').port}`);
});
