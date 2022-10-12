// Dados Abertos

import axios  from "axios";


function getPreposicao(id:number):Promise<Proposicoes> {
    return axios.get(`https://dadosabertos.camara.leg.br/api/v2/proposicoes/${id}`)
       
}


// Trazendo proposicoes por ID
getPreposicao(17465).then((response:Proposicoes) => {
    console.log("Id da Preposição: " , response.data.dados.id)
    console.log("Partido: " ,response.data.dados.siglaTipo)
    console.log("Código: ",response.data.dados.codTipo)
    console.log("Número: ",response.data.dados.numero)
    console.log("Ano: ",response.data.dados.ano)
    console.log("Ementa: ",response.data.dados.ementa)
    console.log("Data da apresentação: ",response.data.dados.dataApresentacao)
    console.log("URI: ",response.data.dados.uriOrgaoNumerador)

    console.log("Status da Preposição")
    console.log("Data da útima atualização da preposição: ", response.data.dados.statusProposicao.dataHora)
    console.log("Sequência: ", response.data.dados.statusProposicao.sequencia)
    console.log("Sigla do Orgão: ", response.data.dados.statusProposicao.siglaOrgao)
    console.log("Uri do Orgão: ", response.data.dados.statusProposicao.uriOrgao)
    console.log("Uri do último Relator : ", response.data.dados.statusProposicao.uriUltimoRelator)
    console.log("Regime : ", response.data.dados.statusProposicao.regime)
    console.log("Descrição da Tramitação : ", response.data.dados.statusProposicao.descricaoTramitacao)
    console.log("Código da Trmitação: ", response.data.dados.statusProposicao.codTipoTramitacao)
    console.log("Descrição da Situção : ", response.data.dados.statusProposicao.descricaoSituacao)
    console.log("Código da Situação: ", response.data.dados.statusProposicao.codSituacao)
    console.log("Despacho: ", response.data.dados.statusProposicao.despacho)
    console.log("Url: ", response.data.dados.statusProposicao.url)
    console.log("Ambito: ", response.data.dados.statusProposicao.ambito)
    console.log("Uri Autores: ", response.data.dados.uriAutores)
    console.log("Descrição Tipo : ", response.data.dados.descricaoTipo)
    console.log("Ementa: ", response.data.dados.ementaDetalhada)
    console.log("keywords: ", response.data.dados.keywords)
    console.log("Uri Principal: ", response.data.dados.uriPropPrincipal)
    console.log("Proposição anterior: ", response.data.dados.uriPropAnterior)
    console.log("Proposição posterior: ", response.data.dados.uriPropPosterior)
    console.log("Url teor: ", response.data.dados.urlInteiroTeor)
    console.log("Urn final: ", response.data.dados.urnFinal)
    console.log("Texto: ", response.data.dados.texto)
    console.log("Justificativa: ", response.data.dados.justificativa)


})

interface Proposicoes {
    data: {
        dados: {
            id: number;
            uri: string;
            siglaTipo: string;
            codTipo: number;
            numero: number;
            ano: string;
            ementa: string;
            dataApresentacao: string;
            uriOrgaoNumerador : string;
            statusProposicao: {
                dataHora: string;
                sequencia: number;
                siglaOrgao: string;
                uriOrgao: string;
                uriUltimoRelator: string;
                regime: string;
                descricaoTramitacao: string;
                codTipoTramitacao:  string;
                descricaoSituacao:  string;
                codSituacao: number;
                despacho:   string;
                url: string;
                ambito: string;
            },
            uriAutores: string;
            descricaoTipo: string;
            ementaDetalhada: string;
            keywords: string;
            uriPropPrincipal: string;
            uriPropAnterior: string;
            uriPropPosterior: string;
            urlInteiroTeor: string;
            urnFinal: string;
            texto: string;
            justificativa: string;
        }
    }
}