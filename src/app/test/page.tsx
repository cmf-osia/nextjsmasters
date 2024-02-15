import Link from "next/link";
import { ProductCounter } from "@/app/test/ProductCounter";
import TestServer from "@/app/test/TestServer";

export default function Test() {
	return (
		<ProductCounter>
			<TestServer />
			<Link href="/blog" className="hover:bg-orange-50 hover:line-through">
				Go to &quot;Products&quot;
			</Link>
		</ProductCounter>
	);
}
