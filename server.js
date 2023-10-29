const mongoose = require('mongoose');

const app = require('./app');

const DB_HOST = "mongodb+srv://margo:pevei7QGNyVIFpjX@cluster0.rzsgcd7.mongodb.net/";

mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(3000)
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1)
  })


