export async function getProducts() {
	try {
		const response = await fetch('https://fakestoreapi.com/products');
		const products = await response.json();
		return products;
	} catch (error) {
		console.error('error', error);
		return [];
	}
}
