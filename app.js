import express from "express";
import * as dotenv from "dotenv";
import Quartos from "./src/controller/Quartos.js";
import Limpezas from "./src/controller/limpezaController.js";
import Reservas from "./src/controller/Reservas.js";
import Funcionarios from "./src/controller/funcionarios-controller.js";
import Hospedes from "./src/controller/Hospedes.js";
import cors from 'cors'

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.listen(port, () => {
    console.log(`Servidor online no endereço http://localhost:${port}`)
})

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    console.log('acessou')
    app.use(cors());
    next();
})

Quartos.rotas(app);
Limpezas.rotas(app);
Reservas.rotas(app);
Funcionarios.rotas(app);
Hospedes.rotas(app);

