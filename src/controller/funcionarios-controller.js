import "reflect-metadata"
import express from "express";
import * as dotenv from "dotenv"

import { Router } from "express";

const router = Router()

router.get('/funcionarios', selectFuncionarios)
router.get('/funcionario', selectFuncionario)
router.post('/funcionario', insertFuncionario)
router.put('/funcionario', updateFuncionario)
router.delete('/funcionario', deleteFuncionario)

export default router
