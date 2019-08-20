const mongoose = require('mongoose');

const habilidadSchema = new mongoose.Schema({
    nombre: String,
    tag: String,
    descripcion: String
});

export default mongoose.model('habilidades', habilidadSchema);

