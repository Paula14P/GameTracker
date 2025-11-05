// src/seed/seed.js
require('dotenv').config();
const mongoose = require('mongoose');

const Game = require('..Game/models/Game');
const Review = require('../models/Review');

const seed = async () => {
  try {
    console.log('Conectando a MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);

    console.log('Limpiando colecciones...');
    await Game.deleteMany({});
    await Review.deleteMany({});

    console.log('Insertando juegos...');

    const games = await Game.insertMany([
      {
        titulo: "Elden Ring",
        genero: "RPG",
        plataforma: "PC",
        añoLanzamiento: 2022,
        desarrollador: "FromSoftware",
        imagenPortada: "",
        descripcion: "Un juego desafiante de mundo abierto.",
        completado: false
      },
      {
        titulo: "The Legend of Zelda: Breath of the Wild",
        genero: "Aventura",
        plataforma: "Nintendo Switch",
        añoLanzamiento: 2017,
        desarrollador: "Nintendo",
        imagenPortada: "",
        descripcion: "Exploración libre y combate dinámico.",
        completado: true
      },
      {
        titulo: "God of War (2018)",
        genero: "Acción",
        plataforma: "PlayStation",
        añoLanzamiento: 2018,
        desarrollador: "Santa Monica Studio",
        imagenPortada: "",
        descripcion: "Una aventura emocional con combates épicos.",
        completado: false
      }
    ]);

    console.log('Insertando reseñas...');

    await Review.insertMany([
      {
        juegoId: games[0]._id,
        puntuacion: 5,
        textoReseña: "Increíble diseño de mundo, dificultad justa.",
        horasJugadas: 120,
        dificultad: "Difícil",
        recomendaria: true
      },
      {
        juegoId: games[1]._id,
        puntuacion: 4,
        textoReseña: "Hermoso pero repetitivo a veces.",
        horasJugadas: 75,
        dificultad: "Normal",
        recomendaria: true
      }
    ]);

    console.log("SEED completado exitosamente!");
    process.exit(0);

  } catch (error) {
    console.error("Error en seed:", error);
    process.exit(1);
  }
};

seed();
