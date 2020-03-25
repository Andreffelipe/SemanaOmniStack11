const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const connection = require('./database/connection');

const routes = express.Router();

routes.post('/sessions', SessionController.create)

//rota responsável por listar ongs cadastradas
routes.get('/ongs', OngController.index)

//rota responsável por criar novas ongs no sistema
routes.post('/ongs', OngController.create)

//rota responsável por listar incident cadastradas
routes.get('/incidents', IncidentController.index)

//rota responsável por criar novas incident no sistema
routes.post('/incidents', IncidentController.create)

//rota responsável por deletar um incident cadastradas
routes.delete('/incidents/:id', IncidentController.delete)

//rota responsável por listar somente incident cadastradas por uma ong
routes.get('/profile', ProfileController.index)

module.exports = routes;
