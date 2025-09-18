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

export type allRooms = {
	id: string;
	room_type: string;
	room_name: string;
	bed_type: string;
}

export type testimonials = {
	id: number;
	guest_name: string;
	submit_date: string;
	testimonial: string;
	rating: number;
}

export type labelProps = {
  htmlFor: string;
	className?: string;
	children: React.ReactNode;
};

export type inputProps = {
	id: string;
  type: string;
  name: string;
	placeholder?: string;
  required?: boolean;
  className?: string;
}

export type selectProps = {
	id: string;
  name: string;
  label: string;
  required?: boolean;
  onChange: React.ChangeEventHandler<HTMLSelectElement>; 
  children: React.ReactNode;
  className?: string;
	value: string
}

export type buttonProps = {
	id: string;
	type: "button" | "submit" | "reset";
  label: string;
  children: React.ReactNode;
  className?: string;
}

export type linkCardsProps = {
	id: string; // Assuming 'id' comes from database rooms
	title: string;
	sub_title?: string;
	description?: string;
} & ImageProps; // linkCardsProps + ImageProps

export type eventProps = {
	id: number;
	eventName: string;
	eventDescription: string;
	eventDate: string;
};