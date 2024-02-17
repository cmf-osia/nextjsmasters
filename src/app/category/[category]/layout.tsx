import { type ReactNode } from "react";
// import { getAllCategories } from "@/api/categories";

// export async function generateStaticParams() {
// 	// const categories = await getAllCategories();
// 	// return categories.slice(0, 2);
// 	return [{ category: "Shoes" }, { category: "Books" }];
// }

export default function Categories({ children }: Readonly<{ children: ReactNode }>) {
	return <>{children}</>;
}
