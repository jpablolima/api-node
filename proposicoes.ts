// Dados Abertos

import axios  from "axios";


function getPreposicao(id:any):Promise<Preposicao> {
    return axios.get(`https://dadosabertos.camara.leg.br/api/v2/proposicoes/${id}`)
       
}
getPreposicao(17464).then((response) => {
    console.log(response.data)
})


interface Preposicao {
    data:{
        id: number,
        ano: number,
        ementa: string,
        // uri: string,
        // siglaTipo: string,
        // codTipo:string,
        // numero: number,
    
    }
}

// getPreposicao().then((response) => {
//     console.log(response.data)
// })