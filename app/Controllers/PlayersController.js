import { getFormData } from "../Utils/FormHandler.js"
import { playersService } from "../Services/PlayersService.js"
import { appState } from "../AppState.js"
import { setHTML } from '../Utils/Writer.js'

function _drawPlayers() {
    let template = ''
    let players = appState.players
    players.forEach(p => template += p.playerTemplate)
    setHTML('scoreBoard', template)
    
}

function _drawActivePlayer() {
    let activePlayer = appState.activePlayer
    setHTML('playerCard', activePlayer.activePlayerTemplate)
}

export class PlayersController {
    constructor() {
        // console.log('hello from the players controller')
    }

    addPlayer(){
        window.event.preventDefault()
        let input = window.event.target
        let formData = getFormData(input)
        // console.log(formData)
        playersService.addPlayer(formData)
        _drawPlayers()
        input.reset()
    }
    
    setActive(ID){
        console.log('set active player', ID)
        playersService.setActive(ID)
        _drawActivePlayer()
    }

    setRandomFruit(){
        playersService.setRandomFruit()
    }

}