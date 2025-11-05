<<<<<<< HEAD
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const gamesRoutes = require('./src/routes/games');
const reviewsRoutes = require('./src/routes/reviews');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/juegos', gamesRoutes);
app.use('/api/reseñas', reviewsRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> {
    console.log('Mongo conectado');
    app.listen(PORT, ()=> console.log(`Server run en puerto ${PORT}`));
  })
  .catch(err => console.error(err));
=======
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const gamesRoutes = require('./src/routes/games');
const reviewsRoutes = require('./src/routes/reviews');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/juegos', gamesRoutes);
app.use('/api/reseñas', reviewsRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> {
    console.log('Mongo conectado');
    app.listen(PORT, ()=> console.log(`Server run en puerto ${PORT}`));
  })
  .catch(err => console.error(err));
>>>>>>> 905d79f9a5a746a97c8ecf7ae0bc0c7d8bb55ec0
