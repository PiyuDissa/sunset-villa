export default function PageTitle ({children}: {children: string}) {
	return (
		<>
			<div className="p-12 bg-gray-100">
				<h1 className="text-[80px] font-medium">{children}</h1>
			</div>
		</>
	)
}