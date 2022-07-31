import FuncionarioModel from "../models/funcionarioModel.js"
import ValidacoesService from "../services/ValidacoesService.js"
import DatabaseFuncionariosMetodos from "../DAO/DatabaseFuncionariosMetodos.js"
import Database from "../database/database.js"

DatabaseFuncionariosMetodos.createTableFuncionarios()

class Funcionarios{
    static rotas(app){
        app.get('/funcionario', async (req, res) => {
            const response = await
            DatabaseFuncionariosMetodos.listAllFuncionarios()
            res.status(200).json(response)
        })

        app.get('/funcionario/:id', async (req, res) => {
            try{
                const funcionario = await DatabaseFuncionariosMetodos.listFuncionariosById(req.params.id)
                if(!funcionario){
                    throw new Error("Funcionário não encontrado no sistema")
                }
                res.status(200).json(funcionario)
            }catch(error){
                res.status(404).json(error.message)
            }
        })

        app.post('/funcionario', async (req, res) => {
            const validarFuncionario = ValidacoesService.validarFuncionario(...Object.values(req.body))
            console.log(validarFuncionario)

            try{
                if(validarFuncionario){
                    const funcionario = new FuncionarioModel(...Object.values(req.body))
                    const response = await DatabaseFuncionariosMetodos.insertFuncionarios(funcionario)
                    res.status(201).json(response)
                }else{
                    const funcionario = new FuncionarioModel(...Object.values(req.body))
                    console.log(funcionario)
                    throw new Error("Revise a requisição")
                }
            }catch(error){
                res.status(400).json(error.message)
            }
        })

        app.put('/funcionario/:id', async (req, res) => {
            try{  
                const validarFuncionario = ValidacoesService.validarFuncionario(...Object.values(req.body))

                if(validarFuncionario){
                    const funcionario = new FuncionarioModel(...Object.values(req.body))
                    const responde = await DatabaseFuncionariosMetodos.updateFuncionarios(req.params.id, funcionario)
                    res.status(201).json(responde)
                    console.log(responde)
                }else {
                    throw new Error("Inválido")

                }
            }catch(error){
                res.status(400).json(error.message)
            }
        })

        app.delete('/funcionario/:id', async (req, res) => {
            try{
                const funcionario = await DatabaseFuncionariosMetodos.deleteFuncionario(req.params.id)
                if(!funcionario){
                    throw new Error("Funcionário não encontrado no sistema")
                }
                res.status(200).json(funcionario)
            }catch(error){
                res.status(404).json(error.message)
            }
        })
    }
}

export default Funcionarios
