// Pegando dados de Proposição da API de  dados Abertos


import axios from "axios";
import { read } from "fs";


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


// Discursos dos parlamentares 
app.get('/deputados/:id/discursos', (req:any, res:any) => {
    const id = req.params.id
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/discursos`).then((response) =>{
        res.json(response.data.dados)
    })
})

// Eventos
app.get('/deputados/:id/eventos', (req:any, res:any) => {
    const id = req.params.id
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/eventos`).then((response) => {
        res.json(response.data.dados)
    })
})


// Frente Parlamentar
app.get('/deputados/:id/frentes', (req:any, res:any) => {
    const id = req.params.id
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/frentes`).then((response) => {
        res.json(response.data.dados)
    }) 
})

// Ocupações
app.get('/deputados/:id/ocupacoes', (req:any, res:any) => {
    const id = req.params.id
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/ocupacoes`).then((response) => {
        res.json(response.data.dados)
    })
})


// Orgãos
app.get('/deputados/:id/orgaos', (req:any, res:any)  => {
    const id = req.params.id
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/orgaos`).then((response) => {
        res.json(response.data.dados)
    })
})

// Profissões
app.get('/deputados/:id/profissoes', (req:any, res:any) => {
    const id = req.params.id
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/profissoes`).then((response) => {
        res.json(response.data.dados)
    })
})

// Lideres
app.get('/legislaturas/:id/lideres', (req:any, res:any) => {
    const id = req.params.id
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/legislaturas/${id}/lideres`).then((response) => {
        res.json(response.data.dados)
    })
})

// Mesa
// app.get('/legislaturas/:id/mesa', (req:any, res:any) => {
//     const id = req.params.id
//     axios.get(`https://dadosabertos.camara.leg.br/api/v2/legislaturas/${id}/mesa`).then((response) => {
//         res.json(response.data.dados)
//     })
// })



// Frente Parlamentar 

app.get("/frentes", (req:any, res:any) => {
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/frentes/`).then((response) => {
        res.json(response.data.dados)
    })  
})

// Frente Parlamentar por ID
app.get("/frentes/:id", (req:any, res:any) =>{
    const id = req.params.id
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/frentes/${id}`).then((response) => {
        res.json(response.data.dados)
    })
})



// Frentes Parlementar/membros 
app.get("/frentes/:id/membros", (req:any, res:any) => {
    const id = req.params.id
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/frentes/${id}/membros`).then((response) => {
        res.json(response.data.dados)
    })
})


// Legislatura 
app.get("/legislaturas", (req:any, res:any) => {
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/legislaturas/`).then((response) => {
        res.json(response.data.dados)
    })
})


app.get("/legislaturas/:id", (req:any, res:any) => {
    const id = req.params.id
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/legislaturas/${id}`).then((response) => {
        res.json(response.data.dados)
    })
})


app.get("/legislaturas/:id/lideres", (req:any, res:any) => {
    const id = req.params.id
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/legislaturas/${id}/lideres`).then((response) => {
        res.json(response.data.dados)
    })
})


app.get("/legislaturas/:id/mesa",(req:any, res:any) => {
    const id = req.params.id
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/legislaturas/${id}/mesa`).then((response) => {
        res.json(response.data.dados)
    })
})


// Partidos
app.get('/partidos', (req:any, res:any) => {
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/partidos`).then((response) => {

        res.json(response.data.dados)
    })
})

// Partidos po ID
app.get("/partidos/:id", (req:any, res:any) => {
    const id = req.params.id
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/partidos/${id}`).then((response) => {
        res.json(response.data.dados)
    })
})


// Deputados Lideres dos Partidos 

app.get("/partidos/:id/lideres", (req:any, res:any) => {
    const id = req.params.id
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/partidos/${id}/lideres`).then((response) => {
        res.json(response.data.dados)
    })
})


app.get("/partidos/:id/membros", (req:any, res:any) => {
    const id = req.params.id
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/partidos/${id}/membros`).then((response) => {
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


// Proposições por Autores
app.get("/proposicoes/:id/autores", (req:any, res:any) => {
    const id = req.params.id
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/proposicoes/${id}/autores`).then((response:any) => {
        res.json(response.data.dados)
    })
})



//  Relacionadas
app.get("/proposicoes/:id/relacionadas", (req:any, res:any) => {
    const id = req.params.id
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/proposicoes/${id}/relacionadas`).then((response:any) => {
        res.json(response.data.dados)
    })
})

// temas
app.get("/proposicoes/:id/temas", (req:any, res:any) => {
    const id = req.params.id
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/proposicoes/${id}/temas`).then((response:any) =>  {
        res.json(response.data.dados)
    })
})








app.listen(port, () => {
    console.log(`Server running in port http://localhost:${port}`)
})