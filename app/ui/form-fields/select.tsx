import { selectProps } from '@/app/lib/definitions';
import clsx from 'clsx';

export default function Select({ id, name, label, required, onChange, children, className, value }: selectProps) {
  return (
		<>
			<select
				id={id}
				name={name}
				onChange={onChange}
				required={required}
				value={value}
				className={clsx(
					"block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
					className
				)}
			>
				{children}
			</select>
		</>
  );
}