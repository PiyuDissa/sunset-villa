import { fetchAllRooms } from '@/app/lib/data';
import clsx from 'clsx';

export async function UpdateRooms() {
	const roomsDeails = await fetchAllRooms();
	const thClassName = "px-4 py-5 font-medium";
	const tdClassName = "px-3 py-3 text-sm border-b border-gray-200";

	return (
		<>
			<div className="mt-6 flow-root">
				<div className="inline-block min-w-full align-middle">
					<div className="rounded-lg bg-gray-50 p-2 md:pt-0">
						<div className="md:hidden">
							{roomsDeails?.map((room) => (
								<div
									key={room.id}
									className="mb-2 w-full rounded-md bg-white p-4"
								>
									<div className="flex items-center justify-between border-b pb-4">
										<div>
											<div className="mb-2 flex items-center">
												<p>{room.room_name}</p>
											</div>
											<p className="text-sm text-gray-500">{room.room_type}</p>
											<p className="text-sm text-gray-500">{room.bed_type}</p>
										</div>
									</div>
									<div className="flex w-full items-center justify-between pt-4">
										{/* <div className="flex justify-end gap-2">
											<UpdateInvoice id={room.id} />
											<DeleteInvoice id={room.id} />
										</div> */}
									</div>
								</div>
							))}
						</div>
						<table className="hidden min-w-full text-gray-900 md:table">
							<thead className="rounded-lg text-left text-sm font-normal">
								<tr>
									<th scope="col" className={clsx(thClassName, "sm:pl-6")}>
										Room Name
									</th>
									<th scope="col" className={thClassName}>
										Room Type
									</th>
									<th scope="col" className={thClassName}>
										Bed Type
									</th>
									<th scope="col" className="relative py-3 pl-6 pr-3">
										<span className="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody className='bg-white'>
								{roomsDeails?.map((room) => (
								<tr key={room.id}>
									<td className={tdClassName}>
										{room.room_name}
									</td>
									<td className={tdClassName}>
										{room.room_type}
									</td>	
									<td className={tdClassName}>
										{room.bed_type}
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