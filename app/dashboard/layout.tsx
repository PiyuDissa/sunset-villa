import SideNav from "@/app/ui/dashboard/sidenav";

export default function dashboard() {
	return (
		<>
			<div className="flex h-full w-full">
				<div className="hidden h-full w-1/5 border-r bg-white md:flex">
					<SideNav />
				</div>
				<div className="hidden h-full w-1/5 border-r bg-white md:flex">
					<h2> Dashboard Content Here </h2>
				</div>
			</div>
		</>
	)
}	
