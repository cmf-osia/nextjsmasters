export interface Entity {
	id: string;
}

export interface ImageProps {
	src: string;
	alt: string;
}

export interface ProductDescription {
	name: string;
	category: string;
	price: number;
	description: string;
}

export interface ProductItem extends Entity, ProductDescription {
	image: ImageProps;
}
