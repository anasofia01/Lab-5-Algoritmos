import './screens/dashboard';

class AppContainer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
    <main-dashboard></main-dashboard>
    `;
	}
}

customElements.define('app-container', AppContainer);
export default AppContainer;
