import { buttonProps } from '@/app/lib/definitions';
import clsx from 'clsx';

export default function Button({ id, type, className, children  }: buttonProps) {
	return (
		<>
			<button
				type={type}
				id={id}
				className={clsx(
				"block w-full px-3 py-2 bg-blue-500 text-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				, className
				)}
			>
				{children}
			</button>
		</>
	)
}