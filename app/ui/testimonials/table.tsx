import { fetchTestimonials } from '@/app/lib/data';
import { testimonials } from '@/app/lib/definitions';
import { StarIcon } from '@heroicons/react/24/outline';;
import { formatDateToLocal } from '@/app/lib/utils';
import clsx from 'clsx';

export async function TestimonialsTable() {
	const testimonials = await fetchTestimonials();
	const thClassName = "px-4 py-5 font-medium w-1/4";
	const tdClassName = "px-3 py-3 text-sm border-b border-gray-200 w-1/4";
	return (
		<>
			<h2>Testimonials</h2>
			<div className="mt-6 flow-root">
				<div className="inline-block min-w-full align-middle">
					<div className="rounded-lg bg-gray-50 p-2 md:pt-0">
						<div className="md:hidden">
							{testimonials?.map((testimonial) => (
								<div
									key={testimonial.id}
									className="mb-2 w-full rounded-md bg-white p-4"
								>
									<div className="flex items-center justify-between border-b pb-4">
										<div>
											<div className="mb-2 flex items-center">
												<p>{testimonial.guest_name}</p>
											</div>
											<div className="flex items-center">
												{Array.from({ length: testimonial.rating }).map((_, i) => (
													<StarIcon key={i} className="h-5 w-5 text-yellow-400" />
												))}
												<p className="text-sm text-gray-500 pl-3">{testimonial.rating} / 5</p>
											</div>
										</div>
									</div>
									<div className="flex w-full items-center justify-between pt-4">
										<div>
											<p className="text-sm text-gray-700 pb-3">
												<i>{testimonial.testimonial}</i>
											</p>
											<p className="text-sm text-gray-600">{formatDateToLocal(testimonial.submit_date)}</p>
										</div>
									</div>
									</div>
							))}
						</div>
						<table className="hidden min-w-full w-full table-fixed text-gray-900 md:table">
							<thead className="rounded-lg text-left text-sm font-normal">
								<tr>
									<th scope="col" className={clsx(thClassName, "sm:pl-6")}>
										Guest Name
									</th>
									<th scope="col" className={thClassName}>
										testimonial
									</th>
									<th scope="col" className={thClassName}>
										Submit Date
									</th>
									<th scope="col" className={thClassName}>
										Rating
									</th>
								</tr>
							</thead>
							<tbody className='bg-white'>
								{testimonials?.map((testimonial) => (
								<tr key={testimonial.id}>
									<td className={tdClassName}>
										{testimonial.guest_name}
									</td>
									<td className={tdClassName}>
										{testimonial.testimonial}
									</td>
									<td className={tdClassName}>
										{formatDateToLocal(testimonial.submit_date)}
									</td>
									<td className={tdClassName}>
										<div className="mb-1 flex items-center">
											{Array.from({ length: testimonial.rating }).map((_, i) => (
												<StarIcon key={i} className="h-5 w-5 text-yellow-400" />
											))}
											<p className="text-sm text-gray-500 pl-3">{testimonial.rating} / 5</p>
										</div>
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