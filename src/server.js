const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

mongoose.connect('mongodb://appuser:2EvHv#22@cluster0-shard-00-00-mdimp.mongodb.net:27017,cluster0-shard-00-01-mdimp.mongodb.net:27017,cluster0-shard-00-02-mdimp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

app.use(express.json());
app.use(routes);

// req.query = acessa query params
// req.params = acessa roupa params
// req.body = acessa corpo da requisição



app.listen(3333);