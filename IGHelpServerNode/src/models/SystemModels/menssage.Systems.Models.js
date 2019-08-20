//Representa el mensaje de los estados de una peticion
const StatusCodeApi = {
    Mess200: {
        'Code':200,
        'summary':'Petition is successful.',
        'AppiStatus': '200 OK'
    },
    Mess401: {
        'Code':401,
        'summary':'Provide a valid token.',
        'AppiStatus': 'Unauthorized'
    },
    Mess404: {
        'Code':404,
        'summary':'The requested resource does not exist.',
        'AppiStatus': 'Not Found'
    },
    Mess500: {
        'Code':500,
        'summary':'Internal error while processing the request.',
        'AppiStatus': 'Internal Server Error'
    }
}
export {
    StatusCodeApi
}