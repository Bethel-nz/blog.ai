import prisma from '@/prisma/client';
import { NextResponse } from 'next/server';

export const GET =  async (request: Request, _: Response) =>{
	try {
		const allBlogs = await prisma.blog.findMany();
		return new NextResponse(JSON.stringify(allBlogs), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		console.error('Error fetching blogs:', error);
		return new NextResponse('Internal Server Error', { status: 500 });
	}
}
