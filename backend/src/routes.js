const { Router } = require('express');
const axios = require('axios');

const Dev = require('./models/Dev');

const routes = Router();

// Tipos de parâmetros:

//Query params: request.query (FIltros, Organizacao, paginação, ...)
//Route params: request.params (Identificar recurso na alteração ou remoção)
//Body: 


routes.get('/devs/list', (request, response) => {

    const { github_username } = request.query;

    const dev = Dev({
        github_username,
    });

    return response.json(dev);

});

routes.put('/users/:id', (request, response) => {

    console.log(request.params);

    return response.json({
        message: 'Put de usuario!',
    });

});

routes.post('/devs/create', );

module.exports = routes;
