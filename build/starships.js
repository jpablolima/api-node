"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// Todas as Starships
function getAllStarships() {
    return axios_1.default.get(`https://swapi.dev/api/starships`);
}
getAllStarships().then((response) => {
    console.log(response.data);
});
function GetStarships(name) {
    return axios_1.default.get(`https://swapi.dev/api/starships?search=${name}`);
}
GetStarships('Republic attack cruiser').then((response) => {
    console.log(response.data);
});
