'use client';
import Link from 'next/link';
import useSWR from 'swr';
import axios from 'axios';
import { StaggerWrapper } from '@/components/StaggerWrapper';
import Blog from '@/components/blog';
import { Fragment } from 'react';
import SkeletonLoader from '@/components/skeleton-loader';

const fetcher = async (url: string) => {
	const res = await axios.get(url);
	if (!res) {
		const error = new Error('An error occurred while fetching the data.');
		throw error;
	}
	return res.data as typeof res.data;
};

export default function Home() {
	const { data, error } = useSWR('/api/all-blogs', fetcher, {
		refreshInterval: 1000,
	});
	if (!data) return <SkeletonLoader />;
	if (error) return console.log(`[ALL - BLOGS] - ${error}`);

	return (
		<>
			{data.map(
				(
					item: {
						slug: string;
						title: string;
						views: number;
						likes: number;
						createdAt: string;
					},
					index: number
				) => (
					<Fragment key={item.slug}>
						<StaggerWrapper index={index}>
							<Blog
								title={item.title}
								slug={item.slug}
								views={item.views}
								likes={item.likes}
								createdAt={item.createdAt}
							/>
						</StaggerWrapper>
					</Fragment>
				)
			)}
		</>
	);
}
