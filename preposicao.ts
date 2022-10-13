// Dados Abertos
//entrypoint api - https://dadosabertos.camara.leg.br/api/v2/proposicoes/
// Informações sobre uma proposições


import axios from "axios";


function getPreposicoes(id:number):Promise<Proposicoes> {
    return axios.get(`https://dadosabertos.camara.leg.br/api/v2/proposicoes/${id}`)
}

getPreposicoes(17465).then((response:Proposicoes) => {
    console.log("Id: ", response.data.dados.id)
    console.log("Uri: ", response.data.dados.uri)
    console.log("Sigla do Partido: ", response.data.dados.siglaTipo)
    console.log("Código: ", response.data.dados.siglaTipo)
    console.log("Número: ", response.data.dados.numero)
    console.log("Ementa: ", response.data.dados.ementa)

})


interface  Proposicoes {
    data: {
        dados: {
            id: number;
            uri: string;
            siglaTipo: string;
            codTipo: number;
            numero: number;
            ano: number;
            ementa: string


        }
    }
}