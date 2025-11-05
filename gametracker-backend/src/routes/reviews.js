const express = require('express');
const router = express.Router();
const ctrl = require('..reviewsController/controllers/reviewsController');

router.get('/', ctrl.getAll);
router.get('/juego/:juegoId', ctrl.getByGame);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;
