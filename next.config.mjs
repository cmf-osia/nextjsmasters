import nextMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	logging: {
		level: "info",
		fetches: {
			fullUrl: true,
		},
	},
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
};

export default nextMDX({
	extension: /\.mdx?$/,
})(nextConfig);
