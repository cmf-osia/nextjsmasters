import { ProductList } from "@/ui/organizms/ProductList";

const products = [
	{
		id: "1",
		name: "T-Shirt 1",
		category: "clothes",
		price: 1234,
		image: {
			src: "./tshirt_1.png",
			alt: "t-shirt 1",
		},
	},
	{
		id: "2",
		name: "Mug 1",
		category: "vessels",
		price: 234,
		image: {
			src: "./mug_1.png",
			alt: "mug 1",
		},
	},
	{
		id: "3",
		name: "Handbag 1",
		category: "women's fashion",
		price: 11234,
		image: {
			src: "./handbag_1.png",
			alt: "handbag 1",
		},
	},
	{
		id: "4",
		name: "Shorts 1",
		category: "clothes",
		price: 5234,
		image: {
			src: "./shorts_1.png",
			alt: "shorts 1",
		},
	},
];
export default function Home() {
	return (
		<>
			<header className="pt-8">
				<h1 className="text-center text-4xl font-bold">Shop</h1>
			</header>
			<section className="sm:max-w2xl mx-auto max-w-md px-12 py-8 md:max-w-4xl lg:max-w-7xl">
				<ProductList products={products} />
			</section>
			<footer className="px-4 py-2 text-left font-mono">© 2024 Copyright: Shop</footer>
		</>
	);
}
