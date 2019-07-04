const mongoose = require('mongoose');

const archivosSchema = new mongoose.Schema({
    archivo: String,
    pregunta: mongoose.Types.ObjectId,
    respuesta: mongoose.Types.ObjectId,
    url: String
});

export default mongoose.model('archivos', archivosSchema);

