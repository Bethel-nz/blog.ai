import React, { ReactNode } from 'react';

const Wrapper = ({ children }: { children: ReactNode }) => {
	return (
		<main className='h-[100dvh] max-w-4xl flex flex-col items-center m-auto p-2 bg-neutral-800'>
			{children}
		</main>
	);
};

export default Wrapper;
