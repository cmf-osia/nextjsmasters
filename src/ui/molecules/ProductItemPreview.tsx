import { ProductCoverImag } from "@/ui/atoms/ProductCoverImage";
import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";
import { type ProductItem } from "@/types";

export const ProductItemPreview = ({
	product: { image, ...description },
}: {
	product: ProductItem;
}) => (
	<article>
		<ProductCoverImag {...image} />
		<div className="mt-3">
			<ProductItemDescription description={description} />
		</div>
	</article>
);
