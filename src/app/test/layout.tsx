import { type LayoutProps } from "../../../.next/types/app/layout";

export default function TestLayout({ children }: LayoutProps) {
	return <div className="border">{children}</div>;
}
