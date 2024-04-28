export const reducer = (state: any, action: any) => {
	switch (action.type) {
		case 'ADD_TO_CAR':
			return {
				...state,
				cart: [...state.cart, action.payload],
			};
		default:
			return state;
	}
};
