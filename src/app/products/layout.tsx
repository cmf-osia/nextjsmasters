import { Suspense, type ReactNode } from "react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { getProductsAmount } from "@/api/products";
import { productsPerPageAmount } from "@/app/products/pagination.config";

export default async function ProductsLayout({
	params,
	children,
}: Readonly<{
	params: { pageNumber: string };
	children: ReactNode;
}>) {
	const pagesAmount = (await getProductsAmount()) / productsPerPageAmount;
	return (
		<>
			<p>
				{pagesAmount}/{params.pageNumber}
			</p>
			<div>
				{Array.from({ length: pagesAmount }, (_, i) => (
					<>
						<ActiveLink
							href={`/products/${i + 1}`}
							key={i}
							aria-current="location"
							aria-label={`Products pagination: ${i + 1}`}
						>
							&nbsp;{i + 1}&nbsp;
						</ActiveLink>
						{i < pagesAmount - 1 && <span>|</span>}
					</>
				))}
			</div>
			<Suspense fallback={"Loading..."}>{children}</Suspense>
		</>
	);
}
