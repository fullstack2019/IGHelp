import express from 'express';
const apiHome = express.Router();
import { StatusCodeApi } from '../models/SystemModels/menssage.Systems.Models';

//Ruta predeterminada del servidor
apiHome.get('/', function (req, res) {
    return res.status(200).send(StatusCodeApi.Mess200);
});

//Para todas las demas Rutas
apiHome.get('*', function (req, res) {
    return res.status(404).send(StatusCodeApi.Mess404)
});
//Para todas las demas Rutas
apiHome.post('*', function (req, res) {
    return res.status(200).send(StatusCodeApi.Mess404)
});
export default apiHome;