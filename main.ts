// Pegando dados de Proposição da API de  dados Abertos


import axios from "axios";


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req:any, res:any) => {
    res.send('Hello, World')
})



// Blocos
app.get('/blocos', (req:any, res:any) => {
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/blocos`).then((response:any) => {
        res.json(response.data)
    })
})

// Blocos detalhes
app.get('/blocos/:id', (req:any, res:any) => {
    const id = req.params.id
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/blocos/${id}`).then((response:any) => {
        res.json(response.data.dados)
    })
})

// Deputados
app.get('/deputados', (req:any, res:any) => {
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados`).then((response:any) => {
        res.json(response.data)
    })
})

// Deputados por ID
app.get('/deputados/:id',(req:any, res:any) => {
    const  id = req.params.id
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}`).then((response:any) => {
        res.json(response.data.dados)
    })
})


// Despesas dos Deputados

app.get('/deputados/:id/despesas',  (req:any, res:any) => {
    const id = req.params.id
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/despesas`).then((response) =>{
        res.json(response.data.dados)
    })
})



// Trazendo resumo das Proposições
app.get('/proposicoes', (req:any, res:any) => {
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/proposicoes`).then((response:any) => {
        res.json(response.data)
    })
})

// Proposições detalhadas
app.get("/proposicoes/:id",(req:any, res:any) => {
    const id = req.params.id
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/proposicoes/${id}`).then((response:any) => {
        res.json(response.data.dados)
    })
})









app.listen(port, () => {
    console.log(`Server running in port http://localhost:${port}`)
})