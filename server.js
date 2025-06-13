const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conecta a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB Atlas'))
.catch((err) => console.error('❌ Error al conectar a MongoDB:', err));

// Verificar que Express funciona
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Importar y usar las rutas de categorías
const categoriasRouter = require('./routes/categorias');
app.use('/categorias', categoriasRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
