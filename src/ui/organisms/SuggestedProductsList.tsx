import { getAllProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProductsList = async () => {
	await sleep(5000);
	const products = await getAllProducts();
	return <ProductList products={products.slice(-4)} />;
};
