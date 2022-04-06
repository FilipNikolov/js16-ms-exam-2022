const config = require('./pkg/config');
require('./pkg/db');

const express = require('express');
const jwt = require('express-jwt');
const plant = require('./handlers/plants');


const api = express();
api.use(express.json());
api.use(jwt({
    secret: config.get('service').jwt_key,
    algorithms: ['HS256']
}).unless({
    path: [
        '/api/v1/plant',
        '/api/v1/plant/:id'
    ]
}));

api.get('/api/v1/plant', plant.getAll);
api.post('/api/v1/plant', plant.create);
api.get('/api/v1/plant/:id', plant.getOne);
api.put('/api/v1/plant/:id', plant.update);
api.delete('/api/v1/plant/:id', plant.remove);

api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Token is invalid!');
    }
});

api.listen(config.get('service').port, err => {
    if(err) return console.log(err);
    console.log(`Server started on port ${config.get('service').port}`);
});
