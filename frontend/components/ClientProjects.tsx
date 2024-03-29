import React from 'react';
import VerticalDivider from './icons/VerticalDivider';

type Props = {
	children: React.ReactNode;
};

const ClientProjects = ({ children }: Props) => {
	return (
		<div className="max-w-6xl m-auto p-7 mb-10">
			<h1 className="text-xl text-center font-semibold">
				projects made for clients:
			</h1>

			<VerticalDivider />

			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-20 gap-y-12">
				{children}
			</div>
		</div>
	);
};

export default ClientProjects;
