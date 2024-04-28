export async function getProducts() {
	try {
		const products = await fetch('https://fakestoreapi.com/products').then((res) => res.json());
		return products;
	} catch (error) {
		console.error('error', error);
		return [];
	}
}
