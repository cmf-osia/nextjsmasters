import { ProductCoverImag } from "@/ui/atoms/ProductCoverImage";
import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";
import { type ProductItem as ProductItemProps } from "@/types";

export const ProductItem = ({
	product: { image, ...description },
}: {
	product: ProductItemProps;
}) => (
	<article>
		<ProductCoverImag {...image} />
		<div className="mt-3">
			<ProductItemDescription description={description} />
		</div>
	</article>
);
