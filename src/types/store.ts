export interface AppState {
	cart: CartItem[];
}

export interface CartItem {
	id: number;
	name: string;
	price: number;
	cuantity: number;
}

export interface Action {
	type: string;
	payload?: any;
}
