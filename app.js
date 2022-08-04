import express from "express";
import * as dotenv from "dotenv";
import Quartos from "./src/controller/Quartos.js";
import Limpezas from "./src/controller/limpezaController.js";
import Reservas from "./src/controller/Reservas.js";
import Funcionarios from "./src/controller/funcionarios-controller.js";
import Hospedes from "./src/controller/Hospedes.js";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.listen(port, () => {
    console.log(`Servidor online no endereço http://localhost:${port}`)
})

app.use(express.json());

Quartos.rotas(app);
Limpezas.rotas(app);
Reservas.rotas(app);
Funcionarios.rotas(app);
Hospedes.rotas(app);

