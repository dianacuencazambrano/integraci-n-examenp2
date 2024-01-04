const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes');
const dotenv = require('dotenv');
const mongoose = require('./config/database.js')

app.use(cors());
dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', router); //api de la app

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
