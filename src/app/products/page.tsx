import { getAllProducts } from "@/api/products";
import { ProductList } from "@/ui/organizms/ProductList";

// import { type ProductItem } from "@/types";
// const products: ProductItem[] = [
// 	{
// 		id: "1",
// 		name: "T-Shirt 1",
// 		category: "clothes",
// 		price: 1234,
// 		image: {
// 			src: "./tshirt_1.png",
// 			alt: "t-shirt 1",
// 		},
// 	},
// 	{
// 		id: "2",
// 		name: "Mug 1",
// 		category: "vessels",
// 		price: 234,
// 		image: {
// 			src: "./mug_1.png",
// 			alt: "mug 1",
// 		},
// 	},
// 	{
// 		id: "3",
// 		name: "Handbag 1",
// 		category: "women's fashion",
// 		price: 11234,
// 		image: {
// 			src: "./handbag_1.png",
// 			alt: "handbag 1",
// 		},
// 	},
// 	{
// 		id: "4",
// 		name: "Shorts 1",
// 		category: "clothes",
// 		price: 5234,
// 		image: {
// 			src: "./shorts_1.png",
// 			alt: "shorts 1",
// 		},
// 	},
// ];
export default async function Products() {
	const products = await getAllProducts();
	return <ProductList products={products} />;
}
