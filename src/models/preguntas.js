const mongoose = require('mongoose');

const preguntasSchema = new mongoose.Schema({
    titulo: String,
    descripcion: String,
    hashtag: String,
    idUsuario: { type: mongoose.Schema.ObjectId, ref: 'Usuarios' },
    archivos: [{ type: mongoose.Schema.ObjectId, ref: 'Archivos' }],
});

export default mongoose.model('preguntas', preguntasSchema);

