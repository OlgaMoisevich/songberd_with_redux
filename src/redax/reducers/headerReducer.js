import React from 'react';
import {SET_NEW_GAME, SET_RANDOM_NUMBER, SET_SELECTION_MENU} from "../types_action";
import birdsData from "../../data/birdsData";

const initialState = {
    selection_tab_menu: 0,
    random_number: Math.floor(Math.random() * (6 - 0)) + 0,
    birds_data: birdsData,
    bird_picture_name: '******',

};

const setRandomItem = () => Math.floor(Math.random() * (6 - 0)) + 0;

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTION_MENU:
            let check = state.selection_tab_menu === 6 ? 1 : state.selection_tab_menu + 1;
            return {...state, selection_tab_menu: check};
        case SET_NEW_GAME:
            return {...state, selection_tab_menu: 1};
        case SET_RANDOM_NUMBER:
            return {...state, random_number: setRandomItem()};
        default:
            return state;
    }
};


export default headerReducer