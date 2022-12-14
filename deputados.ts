// Deputados API

import axios from "axios"


function  getFromDeputados(id:number):Promise<Deputados> {
    return  axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}`)
}

getFromDeputados(204521).then((response) => {
    //console.log(response.data.dados.id)
   // console.log(response.data.dados.uri)
    console.log("Nome Civil:",response.data.dados.nomeCivil)
    console.log("Id: ",response.data.dados.ultimoStatus.id)
    console.log("Uri: ",response.data.dados.ultimoStatus.uri)
    console.log("Nome: ",response.data.dados.ultimoStatus.nome)
    console.log("Sigla do partido: ",response.data.dados.ultimoStatus.siglaPartido)
    console.log("Uri do partido: ",response.data.dados.ultimoStatus.uriPartido)
    console.log("UF:",response.data.dados.ultimoStatus.siglaUf)
    console.log("Id legislatura: ",response.data.dados.ultimoStatus.idLegislatura)
    console.log("Email: ",response.data.dados.ultimoStatus.email)
    console.log("Data: ",response.data.dados.ultimoStatus.data)
    console.log("Nome eleitoral: ",response.data.dados.ultimoStatus.nomeEleitoral)
    console.log("Gabinete: ", response.data.dados.ultimoStatus.gabinete.nome)
    console.log("Predio: ", response.data.dados.ultimoStatus.gabinete.predio)
    console.log("Sala: ", response.data.dados.ultimoStatus.gabinete.sala)
    console.log("Andar: ", response.data.dados.ultimoStatus.gabinete.andar)
    console.log("Telefone: ", response.data.dados.ultimoStatus.gabinete.telefone)
    console.log("Email: ", response.data.dados.ultimoStatus.gabinete.email)
    console.log("Situação: ", response.data.dados.ultimoStatus.situacao)
    console.log("Condição eleitoral: ", response.data.dados.ultimoStatus.condicaoEleitoral)
    console.log("Descrição de status: ", response.data.dados.ultimoStatus.descricaoStatus)

    // -- //
    console.log("CPF: ", response.data.dados.cpf)
    console.log("Sexo: ", response.data.dados.sexo)
    console.log("Web site: ", response.data.dados.urlWebsite)
    console.log("Data de nascimento: ", response.data.dados.dataNascimento)
    console.log("Data de falecimento: ", response.data.dados.dataFalecimento)
    console.log("Rede social: ", response.data.dados.redeSocial)
    console.log("Uf de nascimento: ", response.data.dados.ufNascimento)
    console.log("Cidade de nascimento: ", response.data.dados.municipioNascimento)
    console.log("Escolaridade: ", response.data.dados.escolaridade)


})

interface Deputados {
    data: {
        dados: {
            id: number;
            uri: string;
            nomeCivil: string;
            ultimoStatus: {
                id: number;
                uri: string;
                nome: string;
                siglaPartido: string;
                uriPartido: string;
                siglaUf: string;
                idLegislatura: number;
                urlFoto: string;
                email: string;
                data: string;
                nomeEleitoral: string;
                gabinete: {
                    nome: string;
                    predio: string;
                    sala: string;
                    andar: string;
                    telefone: string;
                    email: string;
                    },
                situacao: string;
                condicaoEleitoral: string;
                descricaoStatus: string;
            },
            cpf: string;
            sexo: string;
            urlWebsite: string;
            redeSocial: [];
            dataNascimento: string;
            dataFalecimento: string;
            ufNascimento: string;
            municipioNascimento: string;
            escolaridade: string;

        }
    }

}