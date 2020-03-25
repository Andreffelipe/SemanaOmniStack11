const express = require("express");
const cors = require('cors');
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, ()=> console.log('Server ON'));


/*
*Métodos HTTP
*GET: buscar/listar uma informação do back-send
*POST: criar uma informação do back-send
*PUT: alterando uma informação do back-send
*DELETE: deletando uma informação do back-send
*/

/*
*QUERY PARAMS: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
*exemplo: http://localhost:3333/users?page=2&nome=andre
app.get('/users', (req, res)=>{
  const params = req.query;
  console.log(params);
})

*ROUTE PARAMS: Parâmetros utilizados para identificar recursos
*exemplo: http://localhost:3333/users/1
app.get('/users/:id', (req, res)=>{
  const params = req.params;
  console.log(params);
})
*REQUEST BODY: Corpo da requisição, utilizado para criar ou alterar recursos
app.post('/users/:id', (req, res)=>{
  const params = req.body;
  console.log(params);
})
*/
