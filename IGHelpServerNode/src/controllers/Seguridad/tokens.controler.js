var nJwt = require('njwt');
import { signingKey, expireToken, TokenModel } from '../../models/Seguridad/TokenModel';
import { UsertAuthentication } from '../../models/Seguridad/UserAuthenticationModel';

//Recibe la peticion para solicitar la creacion del token
function PostTokenAip(req, res) {
    var TokenGenerado = GenerateToken(req);
    return res.status(200).send(TokenGenerado);
}

//Genera y retorna un token
function GenerateToken(ObjectEncrypt) {
    UsertAuthentication.UserName = ObjectEncrypt.body.UserName;
    UsertAuthentication.Pasword = ObjectEncrypt.body.Pasword;

    var claims = {
        iss: ObjectEncrypt.headers.host,
        sub: UsertAuthentication
    };

    var jwt = nJwt.create(claims, signingKey);
    jwt.setExpiration(expireToken);
    var token = jwt.compact();

    TokenModel.ValueToken = token;
    return TokenModel;
}

export default {
    PostTokenAip
};