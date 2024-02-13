'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Markdown from 'markdown-to-jsx';

type Answer = {
	text: string;
};

const AiMessage: React.FC<{ chat: string }> = ({ chat }) => {
	const markdownToHtml = (markdown: string): string => {
		// Replace headers
		markdown = markdown.replace(/#{1,6} (.+?)\n/g, (_, header) => {
			const level = _.indexOf('#');
			return `<h${level}>${header}</h${level}>\n`;
		});

		// Replace code blocks
		markdown = markdown.replace(/```(.+?)\n([\s\S]+?)```/g, (_, lang, code) => {
			return `<pre><code>${code}</code></pre>`;
		});

		// Replace bold text
		markdown = markdown.replace(/\*\*(.*?)\*\*/g, (_, text) => {
			return `<span class="font-bold mt-2">${text}</span>`;
		});

		// Replace newlines
		markdown = markdown.replace(/\n/g, '<div className={`mt-2`}/>');

		// Replace lines starting with "-" with unordered lists
		markdown = markdown.replace(/^- (.+?)\n/g, (_, item) => {
			return `<ul class="mt-2"><li>${item}</li></ul>`;
		});

		return markdown;
	};

	if (chat) return <div dangerouslySetInnerHTML={{ __html: markdownToHtml(chat) }} />;

	return 'Loading...';
};

export default AiMessage;
