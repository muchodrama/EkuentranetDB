const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  subcategorias: [String]
});

module.exports = mongoose.model('Categoria', categoriaSchema, 'Categorias'); // Nombre de nuestra colección
