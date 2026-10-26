import express from 'express';
import { connection } from './src/db.js';

//Importando rotas
import authRoutes from './src/routes/authRoutes.js';

const app = express();

app.use(express.json()); //Mandando o express interpretar requisições que possuem JSON

//Endpoints
app.use('/login', authRoutes);

async function startServer() {

    connection();

    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000")
    })
};

startServer();