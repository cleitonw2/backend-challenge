# Coodesh - Backend Challenge Space Flight News

This is a challenge by [Coodesh](https://coodesh.com/)

Projeto criado para cumprir o desafio de backend da Coodesh.

## Instalação
Execute os comandos a seguir e você terá uma versão local do projeto em execução.
```bash
$ git clone https://github.com/cleitonw2/backend-challenge.git
$ cd backend-challenge/
$ npm install
```
Renomeie o arquivo `.env.example` para `.env` e preencha a variável MONGO_URL. Inicie o servidor com:

```bash
$ npm run build && npm start
```
Ao inicia o servidor o mesmo rodará o escript para popular o banco de dados.

Para rodar os tests:

```bash
$ npm run test
$ npm run test:ci
$ npm run test:unit
$ npm run test:integration
$ npm run test:verbose
```
## Rodando com o docker
```bash
$ docker-compose up -d
$ docker-compose donw
```

## Documentação
Para acessar a documentação digite no browser http://localhost:3000/api-docs/
