export default function SingleProduct({
	params,
	searchParams,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}) {
	const sparam = searchParams.sparam?.toString();
	return (
		<div>
			<h1>
				Single Product: {params.productId}, {sparam}
			</h1>
		</div>
	);
}
