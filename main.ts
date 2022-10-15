import axios from "axios";

function GetFromCep(cep:string):Promise<any>{
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
}

GetFromCep('72911500').then((response) => {
    console.log(response.data)
})

