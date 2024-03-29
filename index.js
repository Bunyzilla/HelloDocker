'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello docker\n');
});

app.listen(PORT, HOST);
//Mensaje enviado por consola
console.log(`Running on http://${HOST}:${PORT}`);