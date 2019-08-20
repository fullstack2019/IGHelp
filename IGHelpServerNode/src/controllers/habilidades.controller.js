import habilidades from '../models/habilidades'

function getHabilities(req, res) {
habilidades.find({},(err, habilidades)=>{
    if(err) return res.status(500).send({mensaje: 'Ocurrio un error', err});
    if(!habilidades) return res.status(204).send({mensaje: 'No hay habilidades creadas', err});
    return res.status(200).send({habilidades});
});
}

function getHabilityById(req, res) {

}

function postHability(req, res) {
const body = req.body;
console.log(body);
const habilidad = new habilidades({
    nombre: body.nombre,
    tag: body.tag,
    descripcion: body.descripcion
});
habilidad.save((err,habilidad)=>{
    if(err) return res.status(500).send({mensaje: 'Ocurrio un error', err});
    if(!habilidad) return res.status(204).send({mensaje: 'No se pudo crear la habilidad', err});
    return res.status(201).send({habilidad});
})


}

function putHability(req, res) {

}

function deleteHability(req, res) {

}

export default {
    postHability,
    getHabilities
}