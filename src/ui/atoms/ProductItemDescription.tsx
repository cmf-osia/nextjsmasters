import { formatMany } from "@/utils/local";
import { type ProductDescription } from "@/types";

export const ProductItemDescription = ({
	description: { name, category, price },
}: {
	description: ProductDescription;
}) => (
	<div>
		<div>
			<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
			<p className="text-sm text-gray-500">
				<span className="sr-only">Kategoria:</span> {category}
			</p>
		</div>
		<p className="text-sm font-medium text-gray-900">
			<span className="sr-only">Cena</span> {formatMany(price / 100)}
		</p>
	</div>
);
