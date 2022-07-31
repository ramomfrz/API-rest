import express from "express";
import * as dotenv from "dotenv";
import DatabaseMetodos from "./src/DAO/DatabaseMetodos.js";
import Quartos from "./src/controller/Quartos.js";
import Limpezas from "./src/controller/LimpezaController.js"
import Reservas from "./src/controller/Reservas.js"
import Funcionarios from "./src/controller/funcionarios-controller.js"

// IMPORTE SEU ARQUIVO .JS DO CONTROLLER // 

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.listen(port, () => {
    console.log(`Servidor online no endereço http://localhost:${port}`)
})

app.use(express.json());
DatabaseMetodos.create();
Quartos.rotas(app);
Limpezas.rotas(app);
Reservas.rotas(app);
Funcionarios.rotas(app);
// IMPORTE NOME DA TABELA .rotas(app) //
