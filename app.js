import express from "express";
import * as dotenv from "dotenv";
import DatabaseMetodos from "./src/DAO/DatabaseMetodos.js";
import Quartos from "./src/controller/Quartos.js";
import cors from "cors";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.listen(port, () => {
    console.log(`Servidor online no endereço http://localhost:${port}`)
})

app.use(express.json());
DatabaseMetodos.createTable();
Quartos.rotas(app);
app.use(cors())