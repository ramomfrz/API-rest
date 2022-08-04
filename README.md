
# PROJETO DO MÓDULO 4 🦖

Projeto do curso de desenvolvimento web full stack da Resília que consiste em criar uma API Rest utilizando CRUD e a estrutura de organização MVC. Tem como finalidade armazenar e gerenciar informações de um hotel.  


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

O projeto utiliza os verbos HTTP (GET, POST, PUT, DELETE) nas 5 entidades criadas para esta API. Elas estão dividdidas em: QUARTOS, RESERVAS, FUNCIONÁRIOS, HOSPEDES e LIMPEZA. Cada entidade possui 5 rotas que são:

* GET: URL_DA_API / *"nome da entidade"*  
* GET: URL_DA_API / *"nome da entidade"/* {id} 
* POST: URL_DA_API / *"nome da entidade"*
* PUT: URL_DA_API / *"nome da entidade"/* {id}
* DELETE: URL_DA_API / *"nome da entidade"/* {id}

A entidade HOSPEDES utiliza o cpf no lugar do id:

* GET: URL_DA_API / hospedes/ {CPF}
* PUT: URL_DA_API / hospedes/ {CPF}
* DELETE: URL_DA_API / hospedes/ {CPF}
* 

## Entidade Quartos

## 🕹️ Exemplos (GET)

GET: URL_DA_API/quartos/

## Resposta: 

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

GET: URL_DA_API/quartos/1

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

## 🕹️ Exemplo (POST)

POST: URL_DA_API/quartos/

```
{
	"numeroQuarto": 115,
	"nomeHospede": "Exemplo",
	"controle": 1,
	"telefone": "664317425"
}
```

## Resposta: 

``` 
{
	"Mensagem": "Registro incluído no sistema com sucesso!"
}

```

## 🕹️ Exemplo (PUT)

PUT: URL_DA_API/quartos/1

```
{
	"numeroQuarto": 200,
	"nomeHospede": "ExemploAtualizado",
	"controle": 0,
	"telefone": "664317425"
}
```
## Resposta: 

```
{
	"Mensagem": "Dados atualizados."
}
```

## 🕹️ Exemplo (DELETE)

DELETE: URL_DA_API/quartos/1

## Resposta: 

```
{
	"Mensagem": "Registro do Id 1 removido com sucesso"
}
```
## Entidade Limpeza

## 🕹️ Exemplos (GET)

GET: URL_DA_API/limpezas/

## Resposta: 

```
[
	{
		"id": 1,
    		"numeroQuarto": "447",
    		"controle": 1,
    		"id_funcionario": "2346",
    		"data": "24/05/2022"
	},
	{
		"id": 2,
    		"numeroQuarto": "9767",
    		controle: 1,
    		id_funcionario: "6497",
    		data: "23/05/2018"
	}
]

```

GET: URL_DA_API/limpezas/1

```
[
	{
		"id": 1,
    		"numeroQuarto": "447",
    		"controle": 1,
    		"id_funcionario": "2346",
    		"data": "24/05/2022"
	}
]

```

## 🕹️ Exemplo (POST)

POST: URL_DA_API/limpezas/

```
{
    	"numeroQuarto": 4687,
    	"controle": 1,
    	"id_funcionario": 2346,
    	"data": "24/05/2022"
}
```

## 🕹️ Exemplo (PUT)

PUT: URL_DA_API/limpezas/1

```
{
	"id": 1,
    	"numeroQuarto": 4687,
    	"controle": 1,
    	"id_funcionario": 2398,
    	"data": "24/05/2022"
}
```
## Resposta: 

```
{
	"Mensagem": "Dados atualizados."
}
```

## 🕹️ Exemplo (DELETE)

DELETE: URL_DA_API/limpezas/1

## Resposta: 

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
