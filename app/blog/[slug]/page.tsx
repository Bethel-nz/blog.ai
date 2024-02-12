import AiMessage from '@/components/AiMessage';
import prisma from '@/prisma/client';
import React from 'react';

const page = async ({ params: { slug } }: { params: { slug: string } }) => {
	const topic = decodeURIComponent(slug);
	const blog = await prisma.blog.findFirst({
		where: {
			slug: topic,
		},
	});
	const data = blog?.title + ' prompt: ' + blog?.prompt;
	return (
		<div>
			<h2 className={'text-3xl font-semibold text-left mb-4 w-full'}>{topic}</h2>
			<div>

			<AiMessage chat={data} />
			</div>
		</div>
	);
};

export default page;
