import LinkCards from '@/app/ui/link-cards';
import { fetchAllRooms } from '@/app/lib/data';

export async function DisplayRooms () {
	const roomsDetails = await fetchAllRooms();

	return (
		<div>
			{roomsDetails?.map((room) => (
				<LinkCards
					src={room.id}
					id={room.id}
					title={room.room_type}
					sub_title={room.room_name}
					description={room.bed_type}
				/>
			))}
		</div>
	)
}