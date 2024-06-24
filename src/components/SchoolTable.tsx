import { FC } from 'react';

interface SchoolTableProps {
	title: string;
	rows: Object[];
	columns: string[];
}

export const SchoolTable: FC<SchoolTableProps> = ({ rows, title, columns }) => {
	return (
		<div className='w-[74%]'>
			<div className='w-full bg-green-800 h-16 pt-2 rounded-t-md rounded-tr-md'>
				<h1 className='text-center text-white font-bold'>{title}</h1>
				<div className='flex items-center'>
					{columns.map(item => (
						<h2 className='text-white font-bold w-full ml-3'>{item}</h2>
					))}
				</div>
			</div>

			<div className='w-full'>
				<div className='flex'>
					{rows.map(_ => (
						<div className='w-full flex items-center'>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
