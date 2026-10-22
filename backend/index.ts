import express from 'express';
import { connection } from './src/db.js';
import { prisma } from './src/db.js';

const app = express();

app.use(express.json()); //Mandando o express interpretar requisições que possuem JSON

async function startServer() {

    connection();

    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000")
    })
};

startServer();