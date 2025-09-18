import { getEventsData } from '@/app/lib/data';

export default async  function UpdateEventsList() {
  const events = await getEventsData();
	const thClassName = "px-4 py-5 font-medium";
	const tdClassName = "px-3 py-3 text-sm border-b border-gray-200";

  return (
		<div className="mt-6 flow-root">
			<div className="inline-block min-w-full align-middle">
				<div className="rounded-lg bg-gray-50 p-2 md:pt-0">
					<div className="md:hidden">
						{events.map((event) => (
							<div
								key={event.eventName}
								className="mb-2 w-full rounded-md bg-white p-4"
							>
								<div className="flex items-center justify-between border-b pb-4">
									<div>
										<p className="text-sm text-gray-500">{event.eventDescription}</p>
										<p className="text-sm text-gray-500">{event.eventDate}</p>
									</div>
								</div>
							</div>
						))}
					</div>
					<table className="hidden min-w-full text-gray-900 md:table">
						<thead className="rounded-lg text-left text-sm font-normal">
							<tr>
								<th scope="col" className={thClassName}>
									Event Name
								</th>
								<th scope="col" className={thClassName}>
									Event Description
								</th>
								<th scope="col" className={thClassName}>
									Event Date
								</th>
							</tr>
						</thead>
						<tbody className='bg-white'>
							{events?.map((event) => (
							<tr key={event.id}>
								<td className={tdClassName}>
									{event.eventName}
								</td>
								<td className={tdClassName}>
									{event.eventDescription}
								</td>	
								<td className={tdClassName}>
									{event.eventDate}
								</td>
							</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
  );
}