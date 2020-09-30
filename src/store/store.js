import React from 'react';
import { createStore } from 'redux';
import reducer from './reducers/reduser'

let state = {
    selection_tab_menu: 1,
};


const store = createStore(reducer);

export default store;