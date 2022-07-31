import express from "express";
import * as dotenv from "dotenv"
import Limpezas from "./src/controller/LimpezaController.js"
import Reservas from "./src/controller/Reservas.js"
<<<<<<< HEAD
import Funcionarios from "./src/controller/funcionarios-controller.js"
=======
import Hospedes from "./src/controller/Hospedes.js"
>>>>>>> bdaa7661e4ee3d69775a3f157010b2b2fd643198

// IMPORTE SEU ARQUIVO .JS DO CONTROLLER // 

dotenv.config()

const port = process.env.PORT || 3000;

const app = express()

app.listen(port, () => {
    console.log(`Servidor online no endereço http://localhost:${port}`)
})

app.use(express.json())

Limpezas.rotas(app)
Reservas.rotas(app)
<<<<<<< HEAD
Funcionarios.rotas(app)
=======
Hospedes.rotas(app)

>>>>>>> bdaa7661e4ee3d69775a3f157010b2b2fd643198
// IMPORTE NOME DA TABELA .rotas(app) //
