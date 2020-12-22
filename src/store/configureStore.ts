import {createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import AppState from './appState';
import thunk from 'redux-thunk';

export const configureStore = (intialState: AppState) => createStore(rootReducer, intialState, applyMiddleware(thunk));