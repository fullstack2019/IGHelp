import express from 'express'
const apiHome = express.Router()

//Ruta predeterminada del servidor
apiHome.get('/',function(req,res){
    return res.status(200).send({'AppiStatus':'OK'});
 });

//Para todas las demas Rutas
apiHome.get('*',function(req,res){
    return res.status(200).send({'AppiResponse':'URL Invalid'})
 });
export default apiHome;