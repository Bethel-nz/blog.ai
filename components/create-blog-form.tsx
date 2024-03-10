import { Button } from '@nextui-org/react';
import React, { FormEvent, useState } from 'react';

import axios from 'axios';
import { Input, Textarea } from '@nextui-org/react';
export default function BlogForm() {
	const [data, setData] = useState({
		title: '',
		prompt: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setData((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	const handleSubmit = async (e: FormEvent) => {
		setIsSubmitting(true);
		e.preventDefault();
		if (data) {
			await axios.post('/api/manage-blog', data);
			setData({
				title: '',
				prompt: '',
			});
		}
		setIsSubmitting(false);
	};
	return (
		<form
			className='flex flex-col justify-between gap-4 font-semibold'
			onSubmit={handleSubmit}
		>
			<Input
				variant='faded'
				name='title'
				isRequired
				label='Enter your blog title'
				type='text'
				onChange={(e) => handleChange(e)}
				value={data.title}
			/>
			<Textarea
				isRequired
				variant='faded'
				label='Enter your Prompt'
				type='text'
				name='prompt'
				onChange={(e) => handleChange(e)}
				value={data.prompt}
				classNames={{
					input: 'resize-y min-h-[20rem]',
				}}
			/>

			<Button
				fullWidth
				role='submit'
				type={'submit'}
				size='lg'
				className={'font-semibold'}
				spinner={isSubmitting}
			>
				Submit
			</Button>
		</form>
	);
}
