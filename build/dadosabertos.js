"use strict";
// Dados Abertos
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function getPreposicao() {
    return axios_1.default.get(`http://dadosabertos.camara.leg.br/arquivos/proposicoes/`);
}
getPreposicao().then((response) => {
    console.log(response.data);
});
