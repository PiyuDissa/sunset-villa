import postgres from 'postgres';
import { allBookings, testimonials, allRooms } from './definitions';

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

export async function fetchTestimonials() {
	try {
		const data = await sql<testimonials[]>`
		SELECT
			"id",
			"guest_name",
			"submit_date",
			"testimonial",
			"rating"
		FROM
			"sunsetvilla_testimonials"
		ORDER BY id
			ASC
		`;
		return data;
	} catch (error) {
		console.error('Error fetching testimonials:', error);
		throw new Error('Failed to fetch testimonials.');
	}
}

export async function fetchAllRooms() {
	try {	
		const data = await sql<allRooms[]>`
		SELECT
			"id",
			"room_type",
			"room_name",
			"bed_type"
		FROM
			"sunsetvilla_rooms"
		ORDER BY id
			ASC
		`;
		return data;
	} catch (error) {
		console.error('Error fetching rooms:', error);
		throw new Error('Failed to fetch rooms.');
	}
}

let events = [
  { id: 1, eventName: 'Event 1', eventDescription: 'Lorem ipsum', eventDate: '2025-08-22' },
  { id: 2, eventName: 'Event 2', eventDescription: 'Lorem ipsum', eventDate: '2025-08-22' },
];

// A function to get all events
export async function getEventsData() {
  return events;
}

// A function to add a new event
export async function addEventData(newEvent: { eventName: string, eventDescription: string, eventDate: string }) {
  const eventWithId = { id: events.length + 1, ...newEvent };
  events.push(eventWithId);
  return eventWithId;
}