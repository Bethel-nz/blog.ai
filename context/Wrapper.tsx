import React, { ReactNode } from 'react';

const Wrapper = ({ children }: { children: ReactNode }) => {
	return (
		<main className='h-[100dvh] w-full max-w-7xl flex-col flex m-auto p-2 '>
			{children}
		</main>
	);
};

export default Wrapper;
