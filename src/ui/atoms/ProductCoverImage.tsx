import { type ImageProps } from "@/types";

export const ProductCoverImag = ({ src, alt }: ImageProps) => (
	<div className="aspect-square overflow-hidden rounded-md border bg-orange-50 hover:bg-orange-100">
		<img
			width={320}
			height={320}
			alt={alt}
			src={src}
			className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
		/>
	</div>
);
