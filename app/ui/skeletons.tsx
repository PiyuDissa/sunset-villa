import clsx from "clsx";

export function BookingsTableRows() {
	const tdClassName = "whitespace-nowrap px-3 py-3 text-sm border-b border-gray-200";
	return (
		<tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
			{/* Customer Name */}
			<td className={tdClassName}>
				<div className="h-6 w-32 rounded bg-gray-100"></div>
			</td>
			{/* nic */}
			<td className={tdClassName}>
				<div className="h-6 w-32 rounded bg-gray-100"></div>
			</td>
			{/* room type */}
			<td className={tdClassName}>
				<div className="h-6 w-16 rounded bg-gray-100"></div>
			</td>
			{/* Date */}
			<td className={tdClassName}>
				<div className="h-6 w-16 rounded bg-gray-100"></div>
			</td>
			{/* Status */}
			<td className={tdClassName}>
				<div className="h-6 w-16 rounded bg-gray-100"></div>
			</td>
			{/* Actions */}
			<td className={tdClassName}>
				<div className="flex justify-end gap-3">
					<div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
					<div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
				</div>
			</td>
		</tr>
	);
}
export function BookingsTableSkeleton() {
	const thClassName = "px-4 py-5 font-medium";
	return (
		<div className="mt-6 flow-root">
			<div className="inline-block min-w-full align-middle">
				<div className="rounded-lg bg-gray-50 p-2 md:pt-0">
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
						<tbody className="rounded-lg text-left text-sm font-normal">
							<BookingsTableRows />
							<BookingsTableRows />
							<BookingsTableRows />
							<BookingsTableRows />
							<BookingsTableRows />
							<BookingsTableRows />
							<BookingsTableRows />
							<BookingsTableRows />
							<BookingsTableRows />
							<BookingsTableRows />
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
export function TestimonialTableRows() {
	const tdClassName = "whitespace-nowrap px-3 py-3 text-sm border-b border-gray-200";
	return (
		<tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
			{/* Guest Name */}
			<td className={tdClassName}>
				<div className="h-6 w-32 rounded bg-gray-100"></div>
			</td>
			{/* testimonial */}
			<td className={tdClassName}>
				<div className="h-6 w-32 rounded bg-gray-100"></div>
			</td>
			{/* Submit Date */}
			<td className={tdClassName}>
				<div className="h-6 w-16 rounded bg-gray-100"></div>
			</td>
			{/* Rating */}
			<td className={tdClassName}>
				<div className="h-6 w-16 rounded bg-gray-100"></div>
			</td>
		</tr>
	);
}
export function TestimonialTableSkeleton() {
	const thClassName = "px-4 py-5 font-medium";
	return (
		<div className="mt-6 flow-root">
			<div className="inline-block min-w-full align-middle">
				<div className="rounded-lg bg-gray-50 p-2 md:pt-0">
					<table className="hidden min-w-full text-gray-900 md:table">
						<thead className="rounded-lg text-left text-sm font-normal">
							<tr>
								<th scope="col" className={clsx(thClassName, "sm:pl-6")}>
									Guest Name
								</th>
								<th scope="col" className={thClassName}>
									Testimonial
								</th>
								<th scope="col" className={thClassName}>
									Submit Date
								</th>
								<th scope="col" className={thClassName}>
									Rating
								</th>
							</tr> 
						</thead>
						<tbody className="rounded-lg text-left text-sm font-normal">
							<TestimonialTableRows />
							<TestimonialTableRows />
							<TestimonialTableRows />
							<TestimonialTableRows />
							<TestimonialTableRows />
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}