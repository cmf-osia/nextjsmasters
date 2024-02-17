import { getAllProducts, getProducts } from "@/api/products";

export async function getAllCategories() {
	const products = await getAllProducts();
	const productsCategories = products.map((product) => product.category);
	return Array.from(new Set(productsCategories));
}

export async function getProductsByCategory(
	category: string,
	pageNumber: number | "all" = "all",
	productsOnPage: number = 4,
) {
	await getAllCategories();

	const products = await getProducts(1, 100);
	const categoryProducts = products.filter((product) => product.category === category);
	if (pageNumber === "all") {
		return categoryProducts;
	}
	const startIndex = (pageNumber - 1) * productsOnPage;
	const endIndex = pageNumber * productsOnPage;
	return categoryProducts.slice(startIndex, endIndex);
}
