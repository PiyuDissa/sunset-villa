import { labelProps } from '@/app/lib/definitions';
import clsx from 'clsx';

export default function Label({ htmlFor, className, children  }: labelProps) {
	return (
		<>
			<label
				htmlFor={htmlFor}
				className={clsx(
					"block text-sm font-medium text-gray-700 mb-1",
					className
				)}
			>
				{children}
			</label>
		</>
	)
}