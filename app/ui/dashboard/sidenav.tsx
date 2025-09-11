import NavLinks from "./nav-links";
import Image from '@/app/ui/image';

export default function SideNav() {
	return (
		<div className="flex h-full flex-col px-3 py-4 md:px-2">
			<Image 
				src="/logo.webp"
				alt="Sunset Villa Logo"
				width={32}
				height={32}
				className="h-8 w-auto"/>
			<NavLinks />
		</div> 
	)
}