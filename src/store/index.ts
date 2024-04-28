import { reducer } from './reducer';
import { printCartState } from './actions';
import { getStoredState, saveState } from '../utils/storage';

let appState = getStoredState() || {
	cart: [],
};

export const dispatch = (action: any) => {
	appState = reducer(appState, action);
	saveState(appState);
	printCartState();
};

export const getState = () => {
	return appState;
};
