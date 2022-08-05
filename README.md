<div align='center'>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
    <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" />
    <img src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white" />
</div>

# PROJETO DO MÓDULO 4 🦖

### Projeto do curso de desenvolvimento web full stack da Resília que consiste em criar uma API Rest utilizando CRUD e a estrutura de organização MVC. Tem como finalidade armazenar e gerenciar informações de um hotel.  




## 🚀 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.JS](https://nodejs.org/en/)
- [Express](http://expressjs.com/pt-br/)
- [SQLite](https://www.sqlite.org/index.html)
- [Insomnia](https://insomnia.rest/download)

## ♟️ Dependências:

São as dependências necessárias para o funcionamento do projeto

```
  "dependencies": {
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "path": "^0.12.7",
    "sqlite3": "^5.0.10",
    "url": "^0.11.0"
  }
```

## ♟️ Dependências de desenvolvimento:

São as dependências utilizadas no desenvolvimento do projeto

```
  "devDependencies": {
    "jest": "^28.1.3",
    "nodemon": "^2.0.19"
```

## 🎫 Como instalar:

Clone o projeto

```bash
  git clone https://github.com/ramomfrz/ProjetoM4Resilia.git

```

Entre no diretório do projeto

```bash
  cd ProjetoM4Resilia
```

Instale as dependências

```bash
  npm i
```

Inicie o servidor

```bash
  npm run start
```

## 🚪 Porta:
O servidor está como padrão para rodar na porta 3000, porém se for necessário é possivel alterar no .env.


## 👣 Rotas:

O projeto utiliza os verbos HTTP (GET, POST, PUT, DELETE) nas 5 entidades criadas para esta API. Elas estão divididas em: QUARTOS, RESERVAS, FUNCIONÁRIOS, HOSPEDES e LIMPEZA. Cada entidade possui 5 rotas que são:

* GET: URL_DA_API / *"nome da entidade"*  
* GET: URL_DA_API / *"nome da entidade"/* {id} 
* POST: URL_DA_API / *"nome da entidade"*
* PUT: URL_DA_API / *"nome da entidade"/* {id}
* DELETE: URL_DA_API / *"nome da entidade"/* {id}

A entidade HOSPEDES utiliza o cpf no lugar do id:

* GET: URL_DA_API / hospedes/ {CPF}
* PUT: URL_DA_API / hospedes/ {CPF}
* DELETE: URL_DA_API / hospedes/ {CPF}

## 🕹️ Retornando as Entidades (GET)

É possível retornar tanto todos os registros de uma entidade quanto registros específicos de cada uma. Na entidade hospedes, para retornar um registro específico, utiliza-se o cpf, nas demais entidades o id.

## GET: URL_DA_API/quartos/

### Resposta: 

```
[
	{
		"id": 1,
		"numeroQuarto": "115",
		"nomeHospedes": "Exemplo",
		"controle": 1,
		"telefone": "664317425"
	},
	{
		"id": 2,
		"numeroQuarto": "123",
		"nomeHospedes": "Exemplo",
		"controle": 0,
		"telefone": "231247425"
	}
]

```

## GET: URL_DA_API/quartos/1

### Resposta:

```
[
	{
		"id": 1,
		"numeroQuarto": "115",
		"nomeHospedes": "Exemplo",
		"controle": 1,
		"telefone": "664317425"
	}
]

```

## GET: URL_DA_API/funionario/

### Resposta:

```
[
	{
		"id": 1,
		"nome": "Mariana Silva",
		"data_admissao": "15/05/2022"
	},
	{
		"id": 2,
		"nome": "João Silva",
		"data_admissao": "20/05/2022"
	}
]
```
## GET: URL_DA_API/funionario/3

### Resposta:

```
{
	"id": 3,
	"nome": "Jane Doe",
	"data_admissao": "25/05/2022"
}
```

## GET: URL_DA_API/hospedes/

### Resposta:
```
[
	{
		"cpf": "12345678912",
		"nome": "José Silva",
		"numeroQuarto": "4",
		"telefone": "199874671"
	},
	{
		"cpf": "12345678913",
		"nome": "João Pedro",
		"numeroQuarto": "6",
		"telefone": "199874622"
	}
]
```

## GET: URL_DA_API/hospedes/12345678928

### Resposta: 
```
{
	"cpf": "12345678928",
	"nome": "Joana Almeida",
	"numeroQuarto": "5",
	"telefone": "199874627"
}
```
## GET: URL_DA_API/reservas/

### Resposta:
```
[
	{
		"id": 1,
		"CPF": "12345678912",
		"nome": "Ramom Silva",
		"numeroQuarto": "4",
		"dataEntrada": "01/01/22",
		"dataSaida": "10/01/22"
	},
	{
		"id": 2,
		"CPF": "12345678918",
		"nome": "Rita Silva",
		"numeroQuarto": "8",
		"dataEntrada": "01/01/22",
		"dataSaida": "10/01/22"
	}
]
```
## GET: URL_DA_API/reservas/1

### Resposta:
```
{
	"id": 1,
	"CPF": "12345678912",
	"nome": "Ramom Silva",
	"numeroQuarto": "4",
	"dataEntrada": "01/01/22",
	"dataSaida": "10/01/22"
}
```

## GET: URL_DA_API/limpezas/

### Resposta:
```
[
	{
		"id": 1,
		"numeroQuarto": "3008",
		"controle": 1,
		"id_funcionario": "2",
		"dataEntrada": "04/08/22"
	},
	{
		"id": 3,
		"numeroQuarto": "3000",
		"controle": 1,
		"id_funcionario": "1",
		"dataEntrada": "04/08/22"
	}
]
```

## GET: URL_DA_API/limpezas/1

### Resposta:
```
{
	"id": 1,
	"numeroQuarto": "3008",
	"controle": 1,
	"id_funcionario": "2",
	"dataEntrada": "04/08/22"
}

```
## 🕹️ Exemplos de inserção dados (POST)

:heavy_exclamation_mark: É importante que os atributos do POST sejam do tipo certo: 

* controle, numeroQuarton id_funcionario --> Number
* nomeHospede, data_admissao, dataEntrada, dataSaida --> String
* telefone --> String, no máximo 9 dígitos
* cpf --> String, exatamente 11 dígitos

## POST: URL_DA_API/quartos/

### Requisição (JSON)


```
{
	"numeroQuarto": 115, 
	"nomeHospede": "Exemplo",
	"controle": 1,
	"telefone": "664317425"
}
```

### Resposta: 

``` 
{
	"Mensagem": "Registro incluído no sistema com sucesso!"
}

```

## POST URL_DA_API/funcionario/

### Requisição (JSON)

```
{
	"nome": "Mariana Silva",
	"data_admissao": "15/05/2022"
}
```
### Resposta:
```
{
	"Mensagem": "Registro incluído no sistema com sucesso!"
}
```

## POST: URL_DA_API/hospedes/

### Requisição (JSON)
```
{
    "cpf": "12345678912",
    "nome": "José Silva",
    "numeroQuarto": 4,
    "telefone": "199874671"
}
```
### Resposta:
```
{
	"Mensagem": "Registro incluído no sistema com sucesso!"
}
```
## POST: URL_DA_API/reservas/

### Requisição (JSON)
```
{
    "CPF":"12345678912",
    "nome": "Ramom Silva",
    "numeroQuarto": 4,
    "dataEntrada": "01/01/22",
    "dataSaida": "10/01/22"
}
```
### Resposta:
```
{
	"Mensagem": "Registro incluído no sistema com sucesso!"
}
```

## POST: URL_DA_API/limpezas/

### Requisição (JSON)
```
{	 
    "numeroQuarto": 447,
    "controle": 1,
    "id_funcionario": 236,
    "data": "24/05/2022"
}
```
### Resposta:
```
{
	"Mensagem": "Registro incluído no sistema com sucesso!"
}
```


## 🕹️ Exemplos de atualização de dados (PUT)

:heavy_exclamation_mark: É importante que os atributos do POST sejam do tipo certo: 

* controle, numeroQuarto, id_funcionario --> Number
* nomeHospede, data_admissao, dataEntrada, dataSaida --> String
* telefone --> String, no máximo 9 dígitos
* cpf --> String, exatamente 11 dígitos

## PUT: URL_DA_API/quartos/1

### Requisição (JSON)

```
{
	"numeroQuarto": 200,
	"nomeHospede": "ExemploAtualizado",
	"controle": 0,
	"telefone": "664317425"
}
```
### Resposta: 

```
{
	"Mensagem": "Dados atualizados."
}
```

## PUT: URL_DA_API/funcionario/2

### Requisição (JSON)

```
{
	"nome": "João da Silva",
	"data_admissao": "25/05/2022"
}
```
### Resposta:
```
{
	"Mensagem": "Dados atualizados."
}
```
## PUT: URL_DA_API/hospedes/12345678928

### Requisição (JSON)
```
{
    "cpf": "12345678928",
    "nome": "Joana Almeida",
    "numeroQuarto": 8,
    "telefone": "199874627"
}
```
### Resposta:
```
{
	"error": false,
	"message": "Hospede cpf 12345678928 atualizado com sucesso."
}
```
## PUT: URL_DA_API/reservas/1

### Requisição (JSON)
```
{
	"CPF": "12345678912",
	"nome": "Ramom Silva",
	"numeroQuarto": 4,
	"dataEntrada": "01/01/22",
	"dataSaida": "12/01/22"
}
```
### Resposta:

```
{
	"Mensagem": "Os dados da reserva foram atualizados."
}

```

## PUT: URL_DA_API/limpezas/1

### Requisição (JSON)
```
{
	"numeroQuarto": 200,
	"controle": 1,
	"id_funcionario": 2,
	"dataEntrada": "04/08/22"
}
```
### Resposta:

```
{
	"Mensagem": "Dados atualizados."
}

```

## 🕹️ Exemplos de deleção de dados (DELETE)

## DELETE: URL_DA_API/quartos/1

### Resposta: 

```
{
	"Mensagem": "Registro do Id 1 removido com sucesso"
}
```

## DELETE: URL_DA_API/funcionario/1

### Resposta:
```
{
	"Mensagem": "Registro do Id 1 removido com sucesso"
}
```

## DELETE: URL_DA_API/hospedes/12345678913

### Resposta:
```
{
	"erro": false,
	"message": "Registro com cpf 12345678913 apagado com sucesso!"
}
```
## DELETE: URL_DA_API/reservas/1

### Resposta:
```
{
	"Mensagem": "Registro de reserva deletado."
}
```

## DELETE: URL_DA_API/limpezas/1

### Resposta:
```
{
	"Mensagem": "Registro do Id 1 removido com sucesso"
}
```

## Autores

- [Allan Barboza](https://github.com/AllanBarbozaG)
- [Carolina Souza](https://github.com/carolinadesouzasilva)
- [Letícia Martins](https://github.com/letxns)
- [Ramom Ferraz](https://github.com/ramomfrz)
- [Raphael Gomes](https://github.com/RaaphaelGomesS)
