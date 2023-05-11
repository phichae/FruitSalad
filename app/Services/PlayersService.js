import { appState } from "../AppState.js";
import { PlayersController } from "../Controllers/PlayersController.js";
import { Player } from "../Models/Player.js";


class PlayersService {

    addPlayer(formData){
        let newPlayer = new Player(formData)
        appState.players.push(newPlayer)
        console.log('made player:', appState.players)
    }
}


export const playersService = new PlayersService()