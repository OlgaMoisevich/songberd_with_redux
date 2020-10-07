import {
    SET_NEW_GAME,
    SET_RANDOM_NUMBER,
    SET_SELECTION_MENU,
    SET_GUESS_ITEM,
    CLICK_ON_BIRDS,
    PICK_BIRD,
    SET_ACCUM_SCORE, SET_TOTAL_SCORE,


} from "../types_action";


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

export function setGuessRandom(item) {
    return {
        type: SET_GUESS_ITEM,
        payload: item,
    }
}

export function clickOnBirds(item) {
    return {
        type: CLICK_ON_BIRDS,
        payload: item,
    }
}

export function pickBird(item) {
    return {
        type: PICK_BIRD,
        payload: item,
    }
}

export function setAccumScore(item) {
    return {
        type: SET_ACCUM_SCORE,
        payload: item,
    }
}
export function setTotalScore(item) {
    return {
        type: SET_TOTAL_SCORE,
        payload: item,
    }
}