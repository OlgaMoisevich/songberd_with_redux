import {SET_NEW_GAME, SET_RANDOM_NUMBER, SET_SELECTION_MENU, SET_BACKGROUND} from "../types_action";


export function handlerNextNavbarTab() {
    return {
        type: SET_SELECTION_MENU
    }
}

export function setNewGame() {
    return {
        type: SET_NEW_GAME
    }
}

export function setRandomNumber() {
    return {
        type: SET_RANDOM_NUMBER
    }
}