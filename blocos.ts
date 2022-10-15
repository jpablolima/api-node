// Blocos partidários
// https://dadosabertos.camara.leg.br/api/v2/blocos

import axios from "axios"

function getFromBlocos(blocos:string):Promise<any> {
    return axios.get(`https://dadosabertos.camara.leg.br/api/v2/${blocos}/`)
}

getFromBlocos("").then((response) => {
    console.log(response.data)
})