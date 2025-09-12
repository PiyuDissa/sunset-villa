'use client';

import React from "react";
import { ImageProps } from "../lib/definitions";

export default function Image({ src, alt, className, width, height, ...props }: ImageProps) {
	const [imgSrc, setImgSrc] = React.useState(src);
	const placeholderSrc = '/placeholder.webp';

	const errorHandler = () => {
		if(imgSrc === placeholderSrc) return;
		setImgSrc(placeholderSrc);
	}

	return (
		<img 
			{...props}
			src={imgSrc} 
			alt={alt}
			width={width}
			height={height}
			className={className} 
			onError={errorHandler} />
	);
}