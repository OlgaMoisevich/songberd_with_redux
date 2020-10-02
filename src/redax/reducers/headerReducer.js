import React from 'react';
import {SET_SELECTION_MENU} from "../types_action";

const initialState = {
    selection_tab_menu: 1,
};


const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTION_MENU:
            let check = state.selection_tab_menu === 7 ? 1 : state.selection_tab_menu + 1;
            return {...state, selection_tab_menu: check};
        default:
            return state;
    }
};


export default headerReducer