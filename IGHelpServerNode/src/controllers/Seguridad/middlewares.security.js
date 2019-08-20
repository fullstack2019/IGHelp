import { signingKey } from '../../models/Seguridad/TokenModel';
import { StatusCodeApi } from '../../models/SystemModels/menssage.Systems.Models';
var nJwt = require('njwt');

const MiddlewaresTokens = {
    //Funcion para validar el token de usuario.
    validateTokensMiddlewares: function (req, res, next) {
        try {
            var TokenHeader = req.headers.authorization;
            nJwt.verify(TokenHeader, signingKey, function (err, verifiedJwt) {
                if (err) {
                    return res.status(401).send(StatusCodeApi.Mess401);
                } else {
                    return next();
                }
            });
        } catch (error) {
            return res.status(500).send(StatusCodeApi.Mess500);
        }
    }
}

module.exports = MiddlewaresTokens;