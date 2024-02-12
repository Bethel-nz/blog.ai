import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
	const { messages } = await req.json();

	const model = await genAI.getGenerativeModel({ model: 'gemini-pro' });
	const stream = await model.generateContent(messages);
	const response = await stream.response;
	const text = response.text();
	return NextResponse.json({ text });
}
