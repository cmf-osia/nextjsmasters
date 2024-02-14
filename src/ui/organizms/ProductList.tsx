import { type ProductItem as ProductItemProps } from "@/types";
import { ProductItem } from "@/ui/molecules/ProductItem";

export const ProductList = ({ products }: { products: ProductItemProps[] }) => (
	<ul
		className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		data-testid="products-list"
	>
		{products.map((product) => (
			<li key={product.id}>
				<ProductItem product={product} />
			</li>
		))}
	</ul>
);
