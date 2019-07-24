import express from 'express'
import bodyParser from 'body-parser'
import HomeRoutes from './routes/HomeApi.routes'
import habilitiesRoutes from './routes/habilidades.routes'
import TokensRoutes from './routes/Seguridad/tokens.routes'
const app = express();

//Body-Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rutas
app.use('/api/tokens', TokensRoutes);
app.use('/api/habilities', habilitiesRoutes);
app.use('/api/', HomeRoutes);



//Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


export default app;

