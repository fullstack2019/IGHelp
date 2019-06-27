import mongoose from 'mongoose'

const usuariosSchema = new mongoose.Schema({
    username: String,
    correo: String,
    proyecto: String,
    habilidades: Array
});

export default mongoose.model('usuarios', usuariosSchema);

