
import { fetchAllBookingsById } from '@/app/lib/data';
import { allBookings } from '@/app/lib/definitions';
import BookingStatus  from '@/app/ui/all-bookings/status';
import { formatDateToLocal } from '@/app/lib/utils';
import clsx from 'clsx';

export async function BookingsTable() {
	const bookings = await fetchAllBookingsById();
	const thClassName = "px-4 py-5 font-medium";
	const tdClassName = "px-3 py-3 text-sm border-b border-gray-200";

	return (
		<>
		<h2>Rooms Booking Details</h2>
		 <div className="mt-6 flow-root">
				<div className="inline-block min-w-full align-middle">
					<div className="rounded-lg bg-gray-50 p-2 md:pt-0">
						<div className="md:hidden">
							{bookings?.map((booking) => (
								<div
									key={booking.id}
									className="mb-2 w-full rounded-md bg-white p-4"
								>
									<div className="flex items-center justify-between border-b pb-4">
										<div>
											<div className="mb-2 flex items-center">
												<p>{booking.full_name}</p>
											</div>
											<p className="text-sm text-gray-500">{booking.nic}</p>
										</div>
										<BookingStatus status={booking.status} />
									</div>
									<div className="flex w-full items-center justify-between pt-4">
										<div>
											<p>{formatDateToLocal(booking.booked_date)}</p>
										</div>
										{/* <div className="flex justify-end gap-2">
											<UpdateInvoice id={booking.id} />
											<DeleteInvoice id={booking.id} />
										</div> */}
									</div>
								</div>
							))}
						</div>
						<table className="hidden min-w-full text-gray-900 md:table">
							<thead className="rounded-lg text-left text-sm font-normal">
								<tr>
									<th scope="col" className={clsx(thClassName, "sm:pl-6")}>
										Customer
									</th>
									<th scope="col" className={thClassName}>
										NIC
									</th>
									<th scope="col" className={thClassName}>
										Room Type
									</th>
									<th scope="col" className={thClassName}>
										Date
									</th>
									<th scope="col" className={thClassName}>
										Status
									</th>
									<th scope="col" className="relative py-3 pl-6 pr-3">
										<span className="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody className='bg-white'>
								{bookings?.map((booking) => (
								<tr key={booking.id}>
									<td className={tdClassName}>
										{booking.full_name}
									</td>
									<td className={tdClassName}>
										{booking.nic}
									</td>	
									<td className={tdClassName}>
										{booking.room_type}
									</td>
									<td className={tdClassName}>
										{formatDateToLocal(booking.booked_date)}
									</td>
									<td className={tdClassName}>
										<BookingStatus status={booking.status} />
									</td>
								</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	)
}