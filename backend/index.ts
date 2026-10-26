import express from 'express';
import cors from 'cors';
import { connection } from './src/db.js';

//Importando rotas
import authRoutes from './src/routes/authRoutes.js';

const app = express();

//Middlewares do express
app.use(express.json()); //Mandando o express interpretar requisições que possuem JSON
app.use(cors());

//Endpoints
app.use('/login', authRoutes);

async function startServer() {

    connection();

    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000")
    })
};

startServer();