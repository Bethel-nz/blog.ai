'use client';
import React, { useState, useEffect } from 'react';

type Answer = {
	text: string;
};

const AiMessage: React.FC<{ chat: string }> = ({ chat }) => {
	const markdownToHtml = (markdown: string): string => {
		markdown = markdown
			.replace(
				/#{1,6} (.+?)\n/g,
				(_, header) =>
					`<h${_.length} style="font-size: ${
						16 - _.length * 2
					}px;">${header}</h${_.length}>`
			)
			.replace(/```(.+?)\n([\s\S]+?)```/g, (_, lang, code) => {
				return `<pre style="background-color: gray; padding: 0.75rem; margin: 0.5rem 0; border-radius: 8px; width:fit-content;"><code>${code}</code></pre>`;
			})
			.replace(
				/\*\*(.*?)\*\*/g,
				(_, text) =>
					`<span style="font-weight: bold; margin-top: 0.8rem;">${text}</span>`
			)
			.replace(/\n/g, '<div style="margin-top: 0.5rem;"></div>')
			.replace(
				/^- (.+?)\n/g,
				(_, item) => `<ul style="margin-top: 0.8rem;"><li>${item}</li></ul>`
			);
		return markdown;
	};

	if (chat) {
		return (
			<div
				dangerouslySetInnerHTML={{ __html: markdownToHtml(chat) }}
				className='text-sm md:text-md w-full'
			/>
		);
	}

	return null;
};

export default AiMessage;
