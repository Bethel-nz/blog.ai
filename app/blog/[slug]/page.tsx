import AiMessage from '@/components/AiMessage';
import prisma from '@/prisma/client';
import React from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const page = async ({ params: { slug } }: { params: { slug: string } }) => {
	const topic = decodeURIComponent(slug);
	const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
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
	const result = await model.generateContent(data);
	const response = await result.response;
	const text = response.text();

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
			<div>
				<h2 className={'text-3xl font-semibold text-left mb-4 w-full'}>
					{blog?.title}
				</h2>
				<div className='hide-scrollbar overflow-y-auto h-[80dvh] w-[32em] max-sm:w-[24em] border-[1px] border-neutral-600 rounded-md p-4'>
					<AiMessage chat={text} />
				</div>
			</div>
		</>
	);
};

export default page;
