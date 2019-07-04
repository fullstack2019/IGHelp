const mongoose = require('mongoose');

const preguntasSchema = new mongoose.Schema({
    respuesta: String,
    pregunta: { type: mongoose.Schema.ObjectId, ref: 'Preguntas' },
    archivos: [{ type: mongoose.Schema.ObjectId, ref: 'Archivos' }],
    calificacion: String,
    idUsuario: { type: mongoose.Schema.ObjectId, ref: 'Usuarios' },
});

export default mongoose.model('preguntas', preguntasSchema);

