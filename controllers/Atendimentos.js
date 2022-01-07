const req = require("express/lib/request")
const res = require("express/lib/response")

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um GET'))

    app.post( '/atendimentos', (req, res) => {
        console.log(req.body)
        res.send ('Você está na rota de atendimentos e está realizando um post')
    })
}