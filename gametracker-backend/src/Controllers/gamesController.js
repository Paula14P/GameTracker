const Game = require('..Game/models/Game');

exports.getAll = async (req, res, next) => {
  try {
    const { q, genero, plataforma, completado } = req.query;
    const filter = {};
    if (q) filter.titulo = new RegExp(q, 'i');
    if (genero) filter.genero = genero;
    if (plataforma) filter.plataforma = plataforma;
    if (completado !== undefined) filter.completado = completado === 'true';
    const games = await Game.find(filter).sort({ fechaCreacion: -1 });
    res.json(games);
  } catch (err) { next(err); }
};

exports.getById = async (req, res, next) => {
  try {
    const game = await Game.findById(req.params.id);
    if(!game) return res.status(404).json({ message: 'Juego no encontrado' });
    res.json(game);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const newGame = new Game(req.body);
    const saved = await newGame.save();
    res.status(201).json(saved);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const updated = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    await Game.findByIdAndDelete(req.params.id);
    res.json({ message: 'Juego eliminado' });
  } catch (err) { next(err); }
};
