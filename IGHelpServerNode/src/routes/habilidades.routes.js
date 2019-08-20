import express from 'express'
import HabilidadesController from '../controllers/habilidades.controller'

const api = express.Router();
const tokenMiddleware = require('../controllers/Seguridad/middlewares.security');

//Para todo el controlador se requiere validacion del token.
api.use(tokenMiddleware.validateTokensMiddlewares);

api.get('/habilidades/', HabilidadesController.getHabilities);
api.post('/habilidad', HabilidadesController.postHability);

export default api;