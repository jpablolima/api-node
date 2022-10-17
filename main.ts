// Pegando dados de Proposição da API de  dados Abertos


import axios from "axios";


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req:any, res:any) => {
    res.send('Hello, World')
})

app.get('/proposicoes', (req:any, res:any) => {
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/proposicoes`).then((response:any) => {
        res.json(response.data)
    })
})



app.get("/proposicoes/:id",(req:any, res:any) => {
    const id = req.params.id
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/proposicoes/${id}`).then((response:any) => {
        res.json(response.data.dados)
    })
})









app.listen(port, () => {
    console.log(`Server running in port http://localhost:${port}`)
})