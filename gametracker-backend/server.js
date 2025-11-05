const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  genero: { type: String },
  plataforma: { type: String },
  añoLanzamiento: { type: Number },
  desarrollador: { type: String },
  imagenPortada: { type: String },
  descripcion: { type: String },
  completado: { type: Boolean, default: false },
  fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Game', GameSchema);
