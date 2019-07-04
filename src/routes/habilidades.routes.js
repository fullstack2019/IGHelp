import express from 'express'
import HabilidadesController from '../controllers/habilidades.controller'

const api = express.Router()

api.get('/habilidades', HabilidadesController.getHabilities);
//api.get('/habilidades/:id', HabilidadesController.getHabilities);
api.post('/habilidad', HabilidadesController.postHability);


export default api;