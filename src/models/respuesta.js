const mongoose = require('mongoose');

const preguntasSchema = new mongoose.Schema({
    respuesta: String,
    pregunta: mongoose.Types.ObjectId,
    archivos: Array,
    calificacion: String,
    idUsuario: mongoose.Types.ObjectId
});

export default mongoose.model('preguntas', preguntasSchema);

