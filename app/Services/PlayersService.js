import { appState } from "../AppState.js";
import { PlayersController } from "../Controllers/PlayersController.js";
import { Player } from "../Models/Player.js";


class PlayersService {

    addPlayer(formData){
        let newPlayer = new Player(formData)
        appState.players.push(newPlayer)
        
        // console.log('made player:', appState.players)
    }

    setActive(ID){
        let foundPlayer = appState.players.find(p => p.id == ID)
        // console.log('found player', foundPlayer)
        appState.activePlayer = foundPlayer
        console.log(appState.activePlayer)
    }

    setRandomFruit(){
        let activeFruit = appState.activeFruit
        activeFruit = appState.fruits[Math.floor(Math.random()*appState.fruits.length)]
        console.log(activeFruit)
    }
}


export const playersService = new PlayersService()