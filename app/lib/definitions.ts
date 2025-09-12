export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
	src: string;
	alt?: string;
	width?: number;
	height?: number;
	className?: string;
};

export type allBookings = {
	id: number;
	full_name: string;
	nic: string;
	room_type: string;
	booked_date: string;
	status: 'paid' | 'pending';
}