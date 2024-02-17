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

const responseProductItemToProductItem = (product: RestProductItem): ProductItem => ({
	id: product.id,
	name: product.title,
	category: product.category,
	price: product.price,
	description: product.description,
	image: { src: product.image, alt: product.description },
});

const fetchProducts = async (searchParams?: {
	take: number;
	offset: number;
}): Promise<ProductItem[]> => {
	let url = "https://naszsklep-api.vercel.app/api/products";
	if (searchParams) {
		url += `?take=${searchParams.take}&offset=${searchParams.offset}`;
	}
	const res = await fetch(url);
	const productsResponse = (await res.json()) as RestProductItem[];
	return productsResponse.map(responseProductItemToProductItem);
};

export async function getAllProducts() {
	return fetchProducts();
}

export async function getProductsAmount() {
	// const res = await fetch("https://naszsklep-api.vercel.app/api/products/amount");
	// return (await res.json()) as number;
	return 200;
}

export async function getProducts(pageNumber: number, productsOnPage: number = 20) {
	return fetchProducts({ take: productsOnPage, offset: (pageNumber - 1) * productsOnPage });
}

export async function getProductById(id: RestProductItem["id"]) {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await res.json()) as RestProductItem;
	return responseProductItemToProductItem(productResponse);
}
