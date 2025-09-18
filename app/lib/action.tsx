'use server';

import { z } from 'zod';
import postgres from 'postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { addEventData } from '@/app/lib/data';
 
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const FormSchema = z.object({
	id:  z.string(),
	room_type:  z.string(),
	room_name:  z.string(),
	bed_type:  z.string()
})

const CreatRooms = FormSchema.omit({ id: true });

export async function createRooms(formData: FormData) {
	const validatedData = CreatRooms.parse({
		room_name: formData.get('roomName'),
		room_type: formData.get('roomType'),
		bed_type: formData.get('noOfBeds')
	});

	await sql`
    INSERT INTO sunsetvilla_rooms (room_name, room_type, bed_type)
    VALUES (
			${validatedData.room_name}, 
      ${validatedData.room_type}, 
      ${validatedData.bed_type}
		)
  `;
	console.log('Raw Form Data:', validatedData);
	revalidatePath('/dashboard/rooms');
	redirect('/dashboard/rooms');
}

export async function createEvent(formData: FormData) {
  const newEvent = {
    eventName: formData.get('eventName') as string,
    eventDescription: formData.get('eventDescription') as string,
    eventDate: formData.get('eventDate') as string,
  };

  // Use the central function to add the event
  await addEventData(newEvent);

  revalidatePath('/dashboard/events'); 
  redirect('/dashboard/events');
}