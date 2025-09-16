import { inputProps } from '@/app/lib/definitions';
import clsx from 'clsx';

export default function Input({ id, type, name, required, className  }: inputProps) {
	return (
		<>
			<input
				type={type}
				id={id}
				name={name}
				required={required}
				className={clsx(
				"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				, className
				)}
			/>
		</>
	)
}