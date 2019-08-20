
let TokenModel = {
    "ValueToken": ""
}
//Clave de cifrado del token
let signingKey = 'Crypto_Key.*';

//Fecha de expiracion del token: (valido desde fecha de emision + 10 minutos).
var expireToken = new Date().getTime() + (600 * 1000);

export {
    TokenModel,
    signingKey,
    expireToken
};