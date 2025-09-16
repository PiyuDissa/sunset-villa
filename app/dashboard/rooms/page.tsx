import CreateRooms from '@/app/ui/rooms/create-rooms';
import { UpdateRooms } from '@/app/ui/rooms/update-rooms';
export default function RoomsPage() {
	return (
		<>
			<h2>Rooms Page</h2>
			<CreateRooms />
			<br/>
			<h2>Rooms Details</h2>
			<UpdateRooms />
		</>
	)
}