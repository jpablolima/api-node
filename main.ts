import axios from "axios";

function GetFromCep(cep:string):Promise<any>{
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
}

GetFromCep('').then((response) => {
    console.log(response.data)
})

// API Star Wars
// Trazendo Naves

function GetStarships(name:string):Promise<any>{
    return axios.get(`https://swapi.dev/api/starships?search=${name}`)
}

GetStarships('Star Destroyer').then((response) => {
    console.log(response.data)
})
