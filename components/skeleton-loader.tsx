import React from 'react';
import { Card, Skeleton } from '@nextui-org/react';

export default function SkeletonLoader() {
	return (
		<>
			{Array.from({ length: 5 }).map((item, index) => (
				<Card
					key={index}
					className='h-28 md:w-[32em] w-[20em] bg-neutral-900 rounded-lg border-[1px] border-neutral-700 space-y-5 p-4 mt-4'
					radius='lg'
				>
					<div className='md:space-y-3'>
						<Skeleton className='md:w-3/5 w-2/5 rounded-lg'>
							<div className='h-3 md:w-3/5 w-2/5 rounded-lg bg-default-200' />
						</Skeleton>
						<Skeleton className='md:w-4/5 w-3/5 rounded-lg'>
							<div className='h-3 md:w-4/5 w-3/5 rounded-lg bg-default-200' />
						</Skeleton>
						<Skeleton className='md:w-2/5 w-1/5 rounded-lg'>
							<div className='h-3 md:w-2/5 w-1/5 rounded-lg bg-default-300' />
						</Skeleton>
					</div>
				</Card>
			))}
		</>
	);
}
