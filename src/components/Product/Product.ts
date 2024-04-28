import styles from './Product.css';
import { dispatch } from '../../store/index';

class ProductCard extends HTMLElement {
	image?: string;
	name?: string;
	description?: string;
	category?: string;
	rating?: string;
	price?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		this.shadowRoot?.querySelector('button')?.addEventListener('click', this.addToCar.bind(this));
	}

	addToCar() {
		console.log('producto:', this.name);
		const productInfo = {
			image: this.image,
			name: this.name,
			price: this.price,
		};
		dispatch({
			type: 'ADD_TO_CAR',
			payload: productInfo,
		});
		alert('Se ha añadido al carrito');
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			<style>${styles}}</style>
      <div class = "container-product">
        <img class = "img-product" src = "${this.image}">
        <h1>${this.name}</h1>
        <p>${this.description}</p>
        <small>${this.category} -</small>
        <small>${this.rating} -</small>
        <small>${this.price}</small>
        <button class = "btnCar">Añadir al carrito</button>
      </div>
      `;
		}
	}
}

customElements.define('product-card', ProductCard);
export default ProductCard;
