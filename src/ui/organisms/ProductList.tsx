import Link from "next/link";
import { type ProductItem } from "@/types";
import { ProductItemPreview } from "@/ui/molecules/ProductItemPreview";

export const ProductList = ({ products }: { products: ProductItem[] }) => (
	<ul
		className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		data-testid="products-list"
	>
		{products.map((product) => (
			<li key={product.id}>
				<Link href={`/product/${product.id}`}>
					<ProductItemPreview product={product} />
				</Link>
			</li>
		))}
	</ul>
);
