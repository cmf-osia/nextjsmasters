const articles = [{ label: "first article" }, { label: "second article" }];
export default function Home() {
	return (
		<section>
			<ul>
				<li>
					{articles.map((data) => (
						<article key={data.label}>{data.label}</article>
					))}
				</li>
			</ul>
			<div></div>
			<div>
				<p>abc</p>
			</div>
		</section>
	);
}
