import { type ProductItem } from "@/types";

interface RestProductItemRaiting {
	rate: number;
	count: number;
}

interface RestProductItem {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: RestProductItemRaiting;
	image: string;
	longDescription: string;
}

export async function getAllProducts() {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products");
	const productsResponse = (await res.json()) as RestProductItem[];
	return productsResponse.map(
		// ({ id, title: name, category, price, image: src, description: alt }): ProductItem => ({
		(product): ProductItem => ({
			id: product.id,
			name: product.title,
			category: product.category,
			price: product.price,
			image: { src: product.image, alt: product.description },
		}),
	);
}
