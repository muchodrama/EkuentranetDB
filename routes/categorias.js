const express = require('express');
const router = express.Router();
const { obtenerCategorias } = require('../controllers/categoriasController'); // Se Importa el Controlador

// Ruta de prueba simple
router.get('/prueba', (req, res) => {
  res.send('✅ Ruta /categorias/prueba funcionando');
});

// Ruta principal para obtener todas las categorías usando el controlador
router.get('/', obtenerCategorias);

module.exports = router;
