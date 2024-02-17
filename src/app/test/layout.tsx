import { type ReactNode } from "react";

export default function TestLayout({ children }: Readonly<{ children: ReactNode }>) {
	return <div className="border">{children}</div>;
}
