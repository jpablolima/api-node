import axios from "axios";


function getDragonBall(name:string):Promise<any>{
    return axios.get(`https://dragon-ball-api.herokuapp/api/character/${name}/json`)
}

getDragonBall('Gohan').then((response) => {
    console.log(getDragonBall)
})
