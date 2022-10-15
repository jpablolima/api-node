"use strict";
// Dados Abertos
//entrypoint api - https://dadosabertos.camara.leg.br/api/v2/proposicoes/
// Informações sobre uma proposições
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function getPreposicoes(id) {
    return axios_1.default.get(`https://dadosabertos.camara.leg.br/api/v2/proposicoes/${id}`);
}
getPreposicoes(17465).then((response) => {
    console.log("Id: ", response.data.dados.id);
    console.log("Uri: ", response.data.dados.uri);
    console.log("Sigla do Partido: ", response.data.dados.siglaTipo);
    console.log("Código: ", response.data.dados.siglaTipo);
    console.log("Número: ", response.data.dados.numero);
    console.log("Ementa: ", response.data.dados.ementa);
});
