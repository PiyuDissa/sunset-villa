import { BookingsTable } from '@/app/ui/all-bookings/table';
import { BookingsTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from 'react';

export default function DashboardPage() {
	return (
		<>
			<Suspense fallback={<BookingsTableSkeleton />}>
				<BookingsTable />
			</Suspense>
		</>
	);
}