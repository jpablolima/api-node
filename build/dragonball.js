"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function getDragonBall(name) {
    return axios_1.default.get(`https://dragon-ball-api.herokuapp/api/character/${name}/json`);
}
getDragonBall('Gohan').then((response) => {
    console.log(getDragonBall);
});
