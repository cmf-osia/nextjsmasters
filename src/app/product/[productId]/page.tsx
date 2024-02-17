import { Suspense } from "react";
import { type Metadata } from "next";
import { getAllProducts, getProductById } from "@/api/products";
import { ProductItemPreview } from "@/ui/molecules/ProductItemPreview";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";

export async function generateStaticParams() {
	const products = await getAllProducts();
	return products.map((product) => ({ productId: product.id })).slice(0, 5);
}

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	const base = {
		title: product.name,
		description: product.description,
	};
	const image = {
		url: product.image.src,
		alt: product.image.alt,
	};

	return {
		...base,
		openGraph: {
			...base,
			images: image,
		},
		twitter: {
			...base,
			images: image,
		},
	};
};

export default async function SingleProduct({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<>
			<div className="max-w-xs">
				<ProductItemPreview product={product} />
			</div>
			<div className="my-3 text-gray-700">{product.description}</div>
			<aside className="mt-8">
				<Suspense fallback={"Loading..."}>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}
