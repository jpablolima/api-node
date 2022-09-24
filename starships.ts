import axios  from "axios"


// Todas as Starships

function getAllStarships():Promise<any>{
    return axios.get(`https://swapi.dev/api/starships`)
}


getAllStarships().then((response) => {
    console.log(response.data)
})


function GetStarships(name:string):Promise<StarshipsData>{
    return axios.get(`https://swapi.dev/api/starships?search=${name}`)
}

GetStarships('Republic attack cruiser').then((response) => {
     console.log(response.data)
})


interface StarshipsData {
    data: [
    {
      name: string;
      model: string;
      manufacturer: string;
      cost_in_credits: string;
      length: string;
      max_atmosphering_speed: string;
      crew: string;
      passengers: string;
      cargo_capacity: string;
      consumables: string;
      hyperdrive_rating: string;
      MGLT: string;
      starship_class: string;
      url: string;
    }]
}



