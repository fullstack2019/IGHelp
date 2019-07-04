const mongoose = require('mongoose');

const preguntasSchema = new mongoose.Schema({
    titulo: String,
    descripcion: String,
    hashtag: String,
    idUsuario: mongoose.Types.ObjectId
});

export default mongoose.model('preguntas', preguntasSchema);

