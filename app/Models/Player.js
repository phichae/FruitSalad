import{ generateId } from '../Utils/generateId.js'

export class Player {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.score = 0
    }

    get playerTemplate() {
        return `
        <div onclick="app.playersController.setActive('${this.id}')" class="d-flex justify-content-between">
                <p class="ps-2">${this.name}</p><p class="pe-2">${this.score}</p>
              </div>
        `
    }

    get activePlayerTemplate() {
        return `
        <h2>${this.name}</h2><p>${this.score}</p>
        `
    }
}