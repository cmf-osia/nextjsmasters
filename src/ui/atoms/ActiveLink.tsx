"use client";

import clsx from "clsx";
import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

type LinkProps<T extends string> = Omit<React.ComponentProps<typeof Link>, "href"> & {
	href: Route<T>;
};

export const ActiveLink = <T extends string>({
	children,
	...linkProps
}: {
	children: ReactNode;
} & LinkProps<T>) => {
	const pathname = usePathname();
	const isActive = pathname === linkProps.href;
	return (
		<Link
			passHref
			className={clsx("text-blue-500", !isActive && "hover:text-blue-700", isActive && "underline")}
			{...linkProps}
			href={linkProps.href}
			aria-current={isActive ? linkProps["aria-current"] : undefined}
		>
			{children}
		</Link>
	);
};
