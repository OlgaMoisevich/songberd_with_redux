import React from 'react';
import {createStore} from 'redux';
import {rootReducer} from './reducers/rootReduser'


export const store = createStore(rootReducer);
