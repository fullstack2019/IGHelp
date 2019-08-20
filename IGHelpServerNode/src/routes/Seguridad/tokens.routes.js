import express from 'express';
const api = express.Router()
import TokenControler from '../../controllers/Seguridad/tokens.controler';

api.post('/GenerateTokenApi',TokenControler.PostTokenAip);

export default api;