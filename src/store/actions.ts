import { getStoredState, saveState } from '../utils/storage';
import { AppState, Action } from '../types/store';

export const printCartState = () => {
	const appState: AppState = getStoredState();
	if (appState) {
		console.log('Estado actual del carrito', appState.cart);
	}
};

export const dispatch = (action: Action) => {
	let appState: AppState = getStoredState() || { cart: [] };
	switch (action.type) {
		case 'ADD_TO_CAR':
			appState = {
				...appState,
				cart: [...appState.cart, action.payload],
			};
	}
};
