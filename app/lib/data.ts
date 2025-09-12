import postgres from 'postgres';
import {allBookings} from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchAllBookingsById() {
	try {
		const data = await sql<allBookings[]>`
		SELECT
			"id",
			"full_name",
			"nic",
			"room_type",
			"booked_date",
			"status"
		FROM
			"sunsetvilla_bookings"
		ORDER BY id
			ASC
		LIMIT
			50
		`;
		return data;
	} catch (error) {
		console.error('Error fetching all bookings:', error);
		throw new Error('Failed to fetch bookings.');
	}	
}