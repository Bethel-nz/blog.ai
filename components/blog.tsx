import React from 'react';
import Link from 'next/link';
import { MessageSquareShare } from 'lucide-react';
import AnimatedNumber from '@/components/animated-number';

const Blog = ({
	title,
	slug,
	views,
	likes,
	createdAt,
}: {
	title: string;
	slug: string;
	views: number;
	likes: number;
	createdAt: string;
}) => {
	const createdDate = new Date(createdAt);

	const formattedDate = createdDate.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
	return (
		<div
			className={
				'min-h-fit md:w-[32em] w-[22em] bg-neutral-900 rounded-lg border-[1px] border-neutral-700 px-4 my-2 py-4'
			}
		>
			<div className='flex justify-between items-center text-white'>
				<Link href={`/blog/${slug}`}>
					<h3 className={'text-lg'}>{title}</h3>
				</Link>
				<div className='flex items-center'>
					<Link href={`/blog/${slug}`}>
						<div className='rounded-full p-2 hover:bg-neutral-600 '>
							<MessageSquareShare className='w-6 h-6' />
						</div>
					</Link>
				</div>
			</div>
			<div className={'flex gap-4 mt-4'}>
				<span className={'flex items-center'}>
					<span className={'text-neutral-500 pr-1'}>
						<AnimatedNumber value={views} />
					</span>{' '}
					Views
				</span>
				<span className={'flex items-center'}>
					<span className={'text-neutral-500 pr-1'}>
						<AnimatedNumber value={likes} />
					</span>{' '}
					Likes
				</span>
				<span className={'ml-auto text-neutral-500'}>{formattedDate}</span>
			</div>
		</div>
	);
};

export default Blog;
