'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Markdown from 'markdown-to-jsx';

type Answer = {
	text: string;
};

const AiMessage: React.FC<{ chat: string }> = ({ chat }) => {
	const [data, setData] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.post(`/api/chat`, { messages: chat });
				const result: Answer = res.data;
				setData(result.text);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, [chat]);
	if(data) return <Markdown>{ (data as string)}</Markdown> 
	
	return 'Loading...';
};

export default AiMessage;
