import { getProducts } from "@/api/products";
import { productsPerPageAmount } from "@/app/products/pagination.config";
import { ProductList } from "@/ui/organisms/ProductList";

export const generateStaticParams = () => {
	const staticallyGeneratedPagesAmount = 5;
	return Array.from({ length: staticallyGeneratedPagesAmount }, (_, i) => ({
		pageNumber: (i + 1).toString(),
	}));
};

export default async function ProductsPage({ params }: { params: { pageNumber: string } }) {
	const products = await getProducts(Number.parseInt(params.pageNumber, productsPerPageAmount));
	return <ProductList products={products} />;
}
