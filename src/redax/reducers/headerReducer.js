import React from 'react';

const initialState = {

};


const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SELECTION_MENU':
            return state.selection_tab_menu === 7 ? 1 : state.selection_tab_menu + 1;
        default:
            return state;
    }
};


export default headerReducer