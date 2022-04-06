const config = require('./pkg/config');
require('./pkg/db');

const express = require('express');
const jwt = require('express-jwt');
const auth = require('./handlers/plants');

const api = express();

// api.get('/api/v1/plant', plant.getPlant);
// api.post('/api/v1/plant', plant.addPlant);
// api.get('/api/v1/plant/:id', plant.getPlantById);
// api.put('/api/v1/plant/:id', plant.updatePlant);
// api.patch('/api/v1/plant/:id', plant.updatePartial);
// api.delete('/api/v1/plant/:id', plant.deletePlant);



api.listen(config.get('service').port, err => {
    if(err) return console.log(err);
    console.log(`Server started on port ${config.get('service').port}`);
});