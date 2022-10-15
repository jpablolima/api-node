"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function GetFromCep(cep) {
    return axios_1.default.get(`https://viacep.com.br/ws/${cep}/json/`);
}
GetFromCep('72911500').then((response) => {
    console.log(response.data);
});
