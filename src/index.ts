import './screens/dashboard';

class Index extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
    <main-dashboard></main-dashboard>
    `;
	}
}

customElements.define('index-contenedor', Index);
export default Index;
