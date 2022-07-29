import express from "express";
import * as dotenv from "dotenv"
import Limpezas from "./src/controller/LimpezaController.js"

// IMPORTE SEU ARQUIVO .JS DO CONTROLLER // 

dotenv.config()

const port = process.env.PORT || 3000;

const app = express()

app.listen(port, () => {
    console.log(`Servidor online no endereço http://localhost:${port}`)
})

app.use(express.json())

Limpezas.rotas(app)
// IMPORTE NOME DA TABELA .rotas(app) //
