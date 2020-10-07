import React from 'react';
import birdsData from "../../data/birdsData";
import {
    CLICK_ON_BIRDS, PICK_BIRD, SET_ACCUM_SCORE,
    SET_GUESS_ITEM,
    SET_NEW_GAME,
    SET_RANDOM_NUMBER,
    SET_SELECTION_MENU, SET_TOTAL_SCORE
} from "../types_action";

const initialState = {
    selection_tab_menu: 0,
    random_number: Math.floor(Math.random() * (6 - 0)) + 0,
    birds_data: birdsData,
    bird_picture_name: '******',
    click_on_birds: false,
    pick_bird: null,
    accScore: 5,
    total_score_on_panel: 0,
};

const setRandomItem = () => Math.floor(Math.random() * (6 - 0)) + 0;

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTION_MENU:
            let check = state.selection_tab_menu === 6 ? 0 : state.selection_tab_menu + 1;
            return {...state, selection_tab_menu: check};
        case SET_NEW_GAME:
            return {...state, selection_tab_menu: 0};
        case SET_RANDOM_NUMBER:
            return {...state, random_number: setRandomItem()};
        case SET_GUESS_ITEM:
            return {...state, bird_picture_name: action['payload']};
        case CLICK_ON_BIRDS:
            return {...state, click_on_birds: action['payload']};
        case PICK_BIRD:
            return {...state, pick_bird: action['payload']};
        case SET_ACCUM_SCORE:
            return {...state, accScore: state.accScore - 1};
        case SET_TOTAL_SCORE:
            return {...state, total_score_on_panel: state.total_score_on_panel += state.accScore};
        default:
            return state;
    }
};

export default headerReducer