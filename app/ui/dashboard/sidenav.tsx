import NavLinks from "./nav-links";
import Image from '@/app/ui/image';
import Link from "next/link";

export default function SideNav() {
	return (
		<div className="flex h-full flex-col px-3 py-4 md:px-2">
			<Link
        className="mb-2 flex h-20 items-end justify-center rounded-md bg-gray-800 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <Image 
						src="/logo.webp"
						alt="Sunset Villa Logo"
						width={100}
						height={20} />
        </div>
      </Link>
			<div className="flex grow flex-row justify-start space-x-2 md:flex-col md:space-x-0 md:space-y-2">
				<NavLinks />
			</div>
		</div> 
	)
}