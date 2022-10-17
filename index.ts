import axios from "axios"



const express = require('express')
const app = express()
const port = 3000

app.get('/', (req:any, res:any) => {
    res.send('Olá, API')
})


/*app.get("/cep", (req:any, res:any) => {
    res.json({
        cep: "",
        bairro: "",
        Cidade: "",
        uf: ""
    })
})*/



app.get("/cep/:cep",(req:any, res:any) => {
    const cep = req.params.cep
    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response:any) => {
        res.json(response.data)
    })
})


app.get('/cryptData', (req:any, res:any) => {
    axios.get(`https://api.coincap.io/v2/assets`).then((response:any) => {
        res.json(response.data.data)
    })
})

app.listen(port, () => {
    console.log(`API run in port http://localhost:${port}`)
})
