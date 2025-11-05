const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  juegoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
  puntuacion: { type: Number, min: 1, max: 5, required: true },
  textoReseña: { type: String },
  horasJugadas: { type: Number, default: 0 },
  dificultad: { type: String, enum: ['Fácil','Normal','Difícil'], default: 'Normal' },
  recomendaria: { type: Boolean, default: false },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date }
});

module.exports = mongoose.model('Review', ReviewSchema);
