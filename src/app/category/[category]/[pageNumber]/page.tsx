import { getAllCategories, getProductsByCategory } from "@/api/categories";
import { ProductList } from "@/ui/organisms/ProductList";

// export async function generateStaticParams({ params }: { params: { category: string } }) {
// 	if (params.category === "Books") {
// 		return [{ pageNumber: "1" }, { pageNumber: "2" }];
// 	} else {
// 		return [{ pageNumber: "1" }];
// 	}
// }

export default async function CategoryProductsPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const pageNumberAsInt = Number.parseInt(params.pageNumber);
	const pageNumber = Number.isNaN(pageNumberAsInt) ? "all" : pageNumberAsInt;
	const products = await getProductsByCategory(params.category, pageNumber);
	const categories = await getAllCategories();
	return (
		<>
			<ProductList products={products} />
			<p className="mt-4">
				Category({(await getProductsByCategory(params.category)).length}): {params.category},{" "}
				{params.pageNumber}
			</p>
			<p>
				Categories: <span className="font-bold">{categories.join(", ")}</span>
			</p>
		</>
	);
}
