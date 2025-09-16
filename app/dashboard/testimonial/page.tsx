import { fetchTestimonials} from '@/app/lib/data';
import { TestimonialsTable } from '@/app/ui/testimonials/table';
import { TestimonialTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default function  TestimonialPage() {
	return (
		<>
			<Suspense fallback={<TestimonialTableSkeleton />}>
					<TestimonialsTable />
			</Suspense>
		</>
	);
}