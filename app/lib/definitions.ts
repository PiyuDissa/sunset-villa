export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
	src: string;
	alt?: string;
	width?: number;
	height?: number;
	className?: string;
};