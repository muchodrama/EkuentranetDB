const Categoria = require('../models/categoria');

const obtenerCategorias = async (req, res) => {
  console.log('📥 Alguien pidió /categorias');

  try {
    const categorias = await Categoria.find();
    res.json(categorias);
  } catch (err) {
    console.error('❌ Error al obtener categorías:', err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  obtenerCategorias
};
