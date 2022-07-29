import funcionarioModel from "../models/funcionarioModel.js"
import//importar as validações do services
import DatabaseFuncionariosMetodos from "../DAO/DatabaseFuncionariosMetodos.js"
import Database from "../database/database.js"


DatabaseFuncionariosMetodos.createTableFuncionarios()

class Funcionarios {
    static rotas(app){
        app.get('/funicionarios', async (req, res) => {
            const response = await
            DatabaseFuncionariosMetodos.listAllFuncionarios()
            res.status(200).json(response)
        })

        app.get('/funcionario', async (req, res) => {
            try{
                const funcionario = await
                DatabaseFuncionariosMetodos.listByIdFuncionario(req.params.id)
                if(!funcionario){
                    throw new Error("Funcionário não encontrado no sistema")
                }
                res.status(200).json(limpeza)
            }catch(error){
                res.status(404).json(error.message)
            }//checar se preciso incluir o id ao lado de "/funcionarios"
        })

        app.post('/funcionario', async (req, res) => {
            const ehValido = ValidacoesFuncionarios.ehValido(...Object.values(req.body))

            try{
                if(ehValido){
                    const funcionario = new FuncionarioModel(...Object.values(req.body))
                    const responde = await
                    DatabaseFuncionariosMetodos.insertFuncionario(funcionario)
                    res.status(201).json(responde)
                }else{
                    throw new Error("Revise a requisição")
                }
            }catch(error){
                res.status(400).json(error.message)
            }
        })

        app.put('/funcionario', (req, rea) => {
            const ehValido = ValidacoesFuncionarios.ehValido(...Object.values(req.body))

            try{
                if(ehValido){
                    const funcionario = new FuncionarioModel(...Object.values(req.body))
                    const responde = DatabaseFuncionariosMetodos.updateFuncionario(req.params.id, funcionario)
                    res.status(201).json(responde)
                }else {
                    throw new Error("Inválido")
                }
            }catch(error){
                res.status(400).json(error.message)
            }
        })//verificar se precisa incluir id

        app.delete('/funcionario', (req, res) => {

            try{
                if(ValidacoesFuncionarios.ValidariId(req.params.id, Database.Funcionarios)) {
                    const funcionario = DatabaseFuncionariosMetodos.deleteFuncionario(id)
                    res.status(200).json(funcionario)
                }else{
                    res.status(404).json({Error:"Funcionário não encontrado"})
                }
            }catch(error){
                res.status(404).json(error.message)
            }
        })
    }
}

export default Funcionarios
