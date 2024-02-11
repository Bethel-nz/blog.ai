import prisma from '@/prisma/client';
import { NextResponse, NextRequest } from 'next/server';

type Body = {
	title: string;
	prompt: string;
};
export default async function POST(request: Request, response: Response) {
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
			},
		});
		return NextResponse.json(newBlogTitle);
	} catch {
		return new NextResponse('Internal Server Error', { status: 500 });
	}
}
