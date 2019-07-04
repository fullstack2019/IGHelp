const mongoose = require('mongoose');

const preguntasSchema = new mongoose.Schema({
    titulo: String,
    descripcion: String,
    hashtag: String,
    usuario: { type: mongoose.Schema.ObjectId, ref: 'Usuarios' },
    archivos: Array,
});

export default mongoose.model('preguntas', preguntasSchema);

