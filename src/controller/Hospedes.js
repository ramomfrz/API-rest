import DatabaseHospedesMetodos from "../DAO/DatabaseHospedesMetodos.js";
import ValidacoesService from "../services/ValidacoesService.js";
import HospedeModel from "../models/HospedeModel.js";
import Database from "../database/Database.js";

DatabaseHospedesMetodos.createTableHospedes();

class Hospedes {
  static rotas(app) {
    app.get("/hospedes", async (req, res) => {
      const response = await DatabaseHospedesMetodos.listarHospedes();
      res.status(200).json(response);      
    })

    app.get("/hospedes/:cpf", async (req, res) => {
      try {
        const hospede = await DatabaseHospedesMetodos.listarHospedePorCPF(req.params.cpf);
        //console.log(hospede)
        if (!hospede) {
          throw new Error("Hospede não encontrado. Verifique o CPF informado.");
        }
        res.status(200).json(hospede);
      } catch (error) {
        res.status(404).json(error.message);
      }
    })

    app.post("/hospedes", async (req, res) => {
      const validaHospede = ValidacoesService.validaHospede(...Object.values(req.body));
      console.log(validaHospede)

      try {
        if (validaHospede) {
          const hospede = new HospedeModel(...Object.values(req.body));
          const response = await (DatabaseHospedesMetodos.registrarHospede(hospede));
          res.status(201).json(response);
        } else {
          throw new Error("Cadastro não realizado. Verifique se os dados da requisição estão corretos." );
        }
      } catch (error) {
        res.status(400).json(error.message);
      }
    })   

    app.put("/hospedes/:cpf", (req, res) => {
      const validaHospede = ValidacoesService.validaHospede(...Object.values(req.body));
      console.log(validaHospede)

      if (validaHospede) {
        const hospede = new HospedeModel(...Object.values(req.body));
        
        const response = DatabaseHospedesMetodos.atualizarHospedesPorCPF(req.params.cpf, hospede)        
        res.status(201).json(response)
      } else {               
        res.status(400).json("Atualização de informações não realizada. Verifique os dados da requisição.")
      }
    })   

    


  }  
}


export default Hospedes