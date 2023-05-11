import { getFormData } from "../Utils/FormHandler.js"
import { playersService } from "../Services/PlayersService.js"


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
    }
}