import styles from './dashboard.css';
import { getProducts } from '../services/getProducts';
import '../components/Product/Product';

class MainDashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		this.loadProducts();
	}

	renderProducts(products: any[]) {
		const productContainer = this.shadowRoot?.querySelector('.container-dashboard');
		if (productContainer) {
			products.forEach((product) => {
				const productElement = document.createElement('product-card') as any;
				productElement.image = product.image;
				productElement.name = product.title;
				productElement.description = product.description;
				productElement.category = product.category;
				productElement.rating = product.rating.rate.toString();
				productElement.price = product.price;
				productContainer.appendChild(productElement);
			});
		}
	}

	async loadProducts() {
		try {
			const products = await getProducts();
			console.log(products);
			this.renderProducts(products);
		} catch (error) {
			console.error('error', error);
		}
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
      <div class="navbar">
          <ul>
            <li><button id="homeButton">Catálogo de Productos</button></li>
            <li><button id="cartButton">Carrito de Compras</button></li>
          </ul>
        </div>
      <div class="container-dashboard"></div>
      `;
		}
		const cssComponent = this.ownerDocument.createElement('style');
		cssComponent.textContent = styles;
	}
}

customElements.define('main-dashboard', MainDashboard);
export default MainDashboard;
