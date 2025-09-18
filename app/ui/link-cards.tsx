import { linkCardsProps } from "../lib/definitions"
import Image from "@/app/ui/image"

export default function LinkCards({title, sub_title, description}: linkCardsProps) {
	return (
		<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
			<Image className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="custom-image" />
			<div className="p-5">
				<h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h2>
				<h3 className="mb-2 text-xl font-weight tracking-tight text-gray-500 dark:text-white">{sub_title}</h3>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
			</div>
		</div>
	)
}