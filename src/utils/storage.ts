export const getStoredState = () => {
	const storedState = localStorage.getItem('appState');
	return storedState ? JSON.parse(storedState) : null;
};

export const saveState = (state: any) => {
	localStorage.setItem('appState', JSON.stringify(state));
};
