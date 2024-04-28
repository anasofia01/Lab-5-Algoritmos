import styles from './dashboard.css';
import { getProducts } from '../services/getProducts';
import '../components/Product/Product';
import '../components/ShoppingCartItem/ShoppingCartItem';
import { getStoredState } from '../utils/storage';

class MainDashboard extends HTMLElement {
	private isCardView: boolean = false;
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		this.loadProducts();
		this.shadowRoot?.getElementById('cartButton')?.addEventListener('click', () => {
			this.isCardView = true;
			this.renderCartItems();
			console.log('entre a la vista carrito');
		});
		this.shadowRoot?.getElementById('homeButton')?.addEventListener('click', () => {
			this.isCardView = false;
			this.loadProducts();
		});
	}

	renderCartItems() {
		const cartState = getStoredState().cart;
		const cardContainer = this.shadowRoot?.querySelector('.container-dashboard');
		if (cardContainer) {
			cardContainer.innerHTML = '';
			cartState.forEach((item: any) => {
				const cardItem = document.createElement('shopping-card-item') as any;
				cardItem.image = item.image;
				cardItem.name = item.name;
				cardItem.price = item.price;
				cardContainer.appendChild(cardItem);
			});
		}
	}

	renderProducts(products: any[]) {
		const productContainer = this.shadowRoot?.querySelector('.container-dashboard');
		if (productContainer) {
			productContainer.innerHTML = '';
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
			<style>${styles}</style>
      <div class="navbar">
          <ul>
            <li><button id="homeButton">Catálogo de Productos</button></li>
            <li><button id="cartButton">Carrito de Compras</button></li>
          </ul>
        </div>
      <div class="container-dashboard"></div>
      `;
		}
	}
}

customElements.define('main-dashboard', MainDashboard);
export default MainDashboard;
