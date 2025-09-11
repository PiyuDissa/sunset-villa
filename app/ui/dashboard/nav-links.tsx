'use-client';

import {
  NumberedListIcon,
  HomeIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const sidebarNavigation = [
  { name: 'All Bookings', href: '/dashboard/bookings', icon: NumberedListIcon },
  { name: 'Rooms Details', href: '/dashboard/rooms', icon: HomeIcon },
  { name: 'Testimonials', href: '/dashboard/projects', icon: HandThumbUpIcon },
];

export default function NavLinks() {
	const pathname = usePathname();
	return (
		<>
		{sidebarNavigation.map(item => {
			const LinkIcon = item.icon;
			return (
				<Link
					key={item.name}
					href={item.href}
					className={clsx(
						'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
						{'bg-sky-100 text-blue-600': pathname === item.href},
					)}
				>
					<LinkIcon className="w-6" />
					<p className="hidden md:block">{item.name}</p>
				</Link>
			);
		})}
		</>
	)
}
