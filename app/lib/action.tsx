'use server';

import { z } from 'zod';
import postgres from 'postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
 
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