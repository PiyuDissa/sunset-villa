import CreateEventsList from '@/app/ui/events/create-events';
import UpdateEventsList from '@/app/ui/events/update-events';

export default function EventsPage() {
	return (
		<>
			<h2>Events Page</h2>
			<CreateEventsList />
			<br/>
			<h2>Events Details</h2>
			<UpdateEventsList />
		</>
	)
}