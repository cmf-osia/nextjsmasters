import { notFound } from "next/navigation";
import { type ComponentType } from "react";

export default async function StaticPage({ params }: { params: { pageName: string } }) {
	const Page = await import(`./${params.pageName}.mdx`).then(
		(module: { default: ComponentType }) => module.default,
		() => notFound,
	);
	return (
		<article className="prose prose-lg">
			<Page />
		</article>
	);
}
