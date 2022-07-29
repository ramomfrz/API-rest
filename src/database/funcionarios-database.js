import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

//ESTE BLOCO FOI RETIRADO DA DOCUMENTAÇÃO 

// you would have to import / invoke this in another file
export async function openDb () {
return open({
   filename: '/tmp/database.db',
   driver: sqlite3.Database
})
}

export async function createTable() {
    openDb().then(db => {
        db.exec(`CREATE TABLE IF NOT EXISTS Funcionarios ( id  VARCHAR PRIMARY KEY,  nome VARCHAR, data_admissao VARCHAR )`)
    })
}

export async function selectFuncionarios(req, res) {
    openDb().then(db => {
    db.all('SELECT * FROM Funcionarios')
    .then(funcionarios=> res.json(funcionarios))
    })
}

export async function selectFuncionario(req, res) {
    let id = req.body.id
     openDb().then(db => {
     db.get('SELECT * FROM Funcionarios WHERE id=?', [id])
     .then(funcionario => res.json(funcionario))
     })
 }

 export async function insertFuncionario(req, res) {
    let funcionario = req.body
    openDb().then(db => {
        db.run(`INSERT INTO Funcionarios (nome, data_admissao) VALUES (?,?)`, [funcionario.nome, funcionario.data_admissao])
    })
    res.json({
        "statusCode": 200
    })
}

export async function updateFuncionario(req, res) {
    let funcionario = req.body
    openDb().then(db => {
        db.run(`UPDATE Funcionarios SET nome=?, data_admissao=? WHERE id=?`, [funcionario.nome, funcionario.data_admissao, funcionario.id])
    })
    res.json({
        "statusCode": 200
    })
}

export async function deleteFuncionario(req, res) {
    let id = req.body.id
    openDb().then(db => {
    db.get('DELETE FROM Funcionarios WHERE id=?', [id])
     .then(res=>res)
     })
     res.json({
        "statusCode": 200
    })
 }