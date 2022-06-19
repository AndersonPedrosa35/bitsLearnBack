const express = require('express');
const bodyParser = require('body-parse');

const app = express();

const PORT = 3000

app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Online na porta ${PORT}`))