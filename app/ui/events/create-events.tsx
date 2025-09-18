import { createEvent } from '@/app/lib/action';
import Input from '@/app/ui/form-fields/input';
import Button from '@/app/ui/form-fields/button';
import Label from  '@/app/ui/form-fields/label';

export default async  function CreateEventsList() {
  return (
		<div className="mt-6 flow-root">
			<form action={createEvent}>
				<div className="bg-gray-50 p-6 rounded-lg shadow-md w-3/4 flex flex-wrap">
					<div className='w-1/2 mb-5 pr-4'>
						<Label htmlFor="roomName">Enter Event Name:</Label>
						<Input
								id="eventName"
								type="text"
								name="eventName" 
								placeholder="Add a new event"
								required
							/>
					</div>
					<div className='w-1/2 mb-5 pr-4'>
						<Label htmlFor="roomName">Enter Event Description:</Label>
						<Input
							id="eventDescription"
							type="text"
							name="eventDescription"
							placeholder="Add a new event "
							required
						/>
					</div>
					<div className='w-1/2 mb-5 pr-4'>
						<Label htmlFor="roomName">Enter Event Date:</Label>
						<Input
							id="eventDate"
							type="date"
							name="eventDate"
							placeholder="Add a new event description"
							required
						/>
					</div>
					<div className='w-1/2 mb-5 pr-4'></div>
					<div className='w-1/2 mb-5 pr-4'>
						<Button 
							type="submit"
							id="createEvent"
							label="Create Event"
							>Add New Event</Button>
					</div>
				</div>
      </form>
		</div>
  );
}