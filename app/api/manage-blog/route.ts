import prisma from '@/prisma/client';
import { NextResponse, NextRequest } from 'next/server';

type Body = {
	title: string;
	prompt: string;
};
export const POST = async (request: Request, _: Response) => {
	try {
		const body = await request.json();
		const { title, prompt }: Body = body;

		if (!title) {
			return new NextResponse('Title is Required', { status: 400 });
		}
		if (!prompt) {
			return new NextResponse('Prompt is Required', { status: 400 });
		}
		const newBlogTitle = await prisma.blog.create({
			data: {
				title,
				prompt,
				slug: title,
				views: 0,
			},
		});
		return NextResponse.json(newBlogTitle);
	} catch {
		return new NextResponse('Internal Server Error', { status: 500 });
	}
};

export const DELETE = async (request: Request, _: Response) => {
	try {
		const body = await request.json();
		const { id }: { id: number } = body;
		if (!id) {
			return new NextResponse('Blog ID is Required', { status: 400 });
		}
		const deletedBlog = await prisma.blog.delete({
			where: {
				id,
			},
		});
		return NextResponse.json(deletedBlog);
	} catch (error) {
		return new NextResponse('Internal Server Error', { status: 500 });
	}
};
