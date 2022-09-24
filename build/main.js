"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function GetFromCep(cep) {
    return axios_1.default.get(`https://viacep.com.br/ws/${cep}/json/`);
}
GetFromCep('').then((response) => {
    console.log(response.data);
});
// API Star Wars
// Trazendo Naves
function GetStarships(name) {
    return axios_1.default.get(`https://swapi.dev/api/starships?search=${name}`);
}
GetStarships('Star Destroyer').then((response) => {
    console.log(response.data);
});
