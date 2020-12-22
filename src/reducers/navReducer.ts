import NavState from '../store/navState';
import { initialState } from '../store/appState';
import { AnyAction } from 'redux';
import * as ActionTypes from '../actions/actionTypes'; 


export default function navReducer(state: NavState = initialState.navState, action: AnyAction) {
    switch (action.type) {
        case ActionTypes.TAB_CHANGED:
            return {
                ...state,
                tab: action.tab
            };
        default: return state;
    }
};
