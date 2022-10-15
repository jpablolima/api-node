"use strict";
// Blocos partidários
// https://dadosabertos.camara.leg.br/api/v2/blocos
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function getFromBlocos(blocos) {
    return axios_1.default.get(`https://dadosabertos.camara.leg.br/api/v2/blocos/`);
}
getFromBlocos("").then((response) => {
    console.log(response.data);
});
