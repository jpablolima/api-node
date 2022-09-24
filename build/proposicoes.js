"use strict";
// Dados Abertos
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function getPreposicao(id) {
    return axios_1.default.get(`https://dadosabertos.camara.leg.br/api/v2/proposicoes/${id}`);
}
getPreposicao(17464).then((response) => {
    console.log(response.data);
});
// getPreposicao().then((response) => {
//     console.log(response.data)
// })
