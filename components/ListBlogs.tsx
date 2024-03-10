'use client';
import Link from 'next/link';
import useSWR from 'swr';
import axios from 'axios';
import { StaggerWrapper } from './StaggerWrapper';
import Blog from '@/components/blog';
import SkeletonLoader from './skeleton-loader';
import useRouter from 'next/navigation';
const fetcher = async (url: string) => {
	const res = await axios.get(url);
	if (!res) {
		const error = new Error('An error occurred while fetching the data.');
		throw error;
	}
	return res.data as typeof res.data;
};

import React, { Fragment } from 'react';
import AnimatedNumber from './animated-number';
import { Trash } from 'lucide-react';

export const ListBlogs = () => {
	const { data, error } = useSWR('/api/all-blogs', fetcher, {
		refreshInterval: 1000,
	});
	if (!data) return <SkeletonLoader />;
	const deleteBlog = async (id: number) => {
		try {
			const response = await axios.delete('/api/manage-blog', {
				data: { id },
			});
			if (response.status === 200) {
				console.log('Blog deleted successfully');
			} else {
				console.error('Error deleting blog:', response.data);
			}
		} catch (error) {
			console.error('Error deleting blog:', error);
		}
	};

	return (
		<div>
			{data.map((blog: { title: string; id: number }, index: number) => (
				<Fragment key={blog.title}>
					<StaggerWrapper index={index}>
						<div
							key={blog.title}
							className={
								'min-h-fit bg-neutral-900 rounded-lg border-[1px] border-neutral-700 px-4 my-2 py-4'
							}
						>
							<div className='flex justify-between items-center '>
								<h3 className={'text-lg'}>{blog.title}</h3>

								<div className='flex items-center'>
									<div>
										<button
											className='rounded-full p-2 hover:bg-red-600 '
											onClick={() => deleteBlog(blog.id)}
										>
											<Trash className='w-6 h-6' />
										</button>
									</div>
								</div>
							</div>
						</div>
					</StaggerWrapper>
				</Fragment>
			))}
		</div>
	);
};
export const revalidate = 60;
