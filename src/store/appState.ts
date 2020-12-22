import NavState from './navState';

interface AppState {
    navState: NavState;
}

export const initialState: AppState = {
    navState: {
        tab: "%$^%$^"
    }
};

export default AppState;

