import AiMessage from '@/components/AiMessage';
import prisma from '@/prisma/client';
import PostToAi from '@/util/post-to-ai';
import React from 'react';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateStaticParams() {
	const blogs = await prisma.blog.findMany();

	return blogs.map((blog) => ({
		slug: blog.slug,
	}));
}

type Props = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const slug = params.slug;
	const topic = decodeURIComponent(slug);

	// fetch data
	const blog = await prisma.blog.findFirst({
		where: {
			slug: topic,
		},
	});

	return {
		title: blog?.title,
	};
}

const page = async ({ params: { slug } }: { params: { slug: string } }) => {
	const topic = decodeURIComponent(slug);
	const blog = await prisma.blog.findFirst({
		where: {
			slug: topic,
		},
	});
	if (blog) {
		await prisma.blog.update({
			where: { slug: topic },
			data: {
				views: {
					increment: 1,
				},
			},
		});
	}

	const data = blog?.title + ' prompt: ' + blog?.prompt;
	const text: string = await PostToAi(data);

	return (
		<>
			<style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
			<div className={'px-2'}>
				<h2
					className={
						'md:text-3xl text-xl font-semibold mb-4 w-full text-center'
					}
				>
					{blog?.title}
				</h2>
				<div className={'divide-x-1 divide-neutral-600'} />
				<div className='hide-scrollbar overflow-y-auto h-[80dvh] w-[22em] border-[1px] max-w-[360px]:w-[18em] max-w-[680px]:w-full md:w-full  border-neutral-600 rounded-md p-4'>
					<AiMessage chat={text} />
				</div>
			</div>
		</>
	);
};

export default page;
