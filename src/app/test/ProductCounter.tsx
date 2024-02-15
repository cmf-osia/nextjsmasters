"use client";

import {
	useParams,
	usePathname,
	useRouter,
	useSelectedLayoutSegment,
	useSelectedLayoutSegments,
} from "next/navigation";
import { type ReactNode, useState } from "react";

export const ProductCounter = ({ children }: Readonly<{ children: ReactNode }>) => {
	console.log("useRouter", useRouter());
	console.log("useSelectedLayoutSegment", usePathname(), useSelectedLayoutSegment());
	console.log("useSelectedLayoutSegments", useParams(), useSelectedLayoutSegments());

	const [count, setCount] = useState(0);
	return (
		<div>
			<button className="border border-slate-200 p-1" onClick={() => setCount(count - 1)}>
				Decrement
			</button>
			<p className="p-2 font-bold">Count: {count}</p>
			<button className="border border-slate-200 p-1" onClick={() => setCount(count + 1)}>
				Increment
			</button>
			{count % 2 === 0 && children}
		</div>
	);
};
