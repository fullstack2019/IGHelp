const mongoose = require('mongoose');

const archivosSchema = new mongoose.Schema({
    archivo: String,
    pregunta: { type: mongoose.Schema.ObjectId, ref: 'Preguntas' },
    respuesta: { type: mongoose.Schema.ObjectId, ref: 'Respuestas' },
    url: String
});

export default mongoose.model('archivos', archivosSchema);

