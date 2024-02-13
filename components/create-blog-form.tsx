import { Button } from '@nextui-org/react';
import React, { FormEvent, useState } from 'react';

import axios from 'axios';
import { Input, Textarea } from '@nextui-org/react';
export default function BlogForm() {
	const [data, setData] = useState({
		title: '',
		prompt: '',
	});
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		await axios.post('/api/create-blog', data);
		setData({
			title: '',
			prompt: '',
		});
	};
	return (
		<form className='flex flex-col gap-4' onSubmit={handleSubmit}>
			<Input
				variant='faded'
				name='title'
				isRequired
				label='Enter your Title'
				type='text'
				onChange={(e) => handleChange(e)}
				value={data.title}
				classNames={{
					label: ' text-white',
					input: [
						'bg-transparent',
						'text-black/90 ',
						'placeholder:text-default-700/50 ',
					],
					innerWrapper: 'bg-transparent',
					inputWrapper: [
						'shadow-xl',
						'bg-default-200/50',
						'dark:bg-default/60',
						'backdrop-blur-xl',
						'backdrop-saturate-200',
						'hover:bg-default-200/70',
						'dark:hover:bg-default/70',
						'group-data-[focused=true]:bg-default-200/50',
						'dark:group-data-[focused=true]:bg-default/60',
						'!cursor-text',
					],
				}}
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
					label: ' text-white',

					input: [
						'bg-transparent',
						'text-black/90 ',
						'placeholder:text-default-700/50 ',
						'resize-y main-h-[40px]',
					],

					innerWrapper: 'bg-transparent',
					inputWrapper: [
						'shadow-xl',
						'bg-default-200/50',
						'dark:bg-default/60',
						'backdrop-blur-xl',
						'backdrop-saturate-200',
						'hover:bg-default-200/70',
						'dark:hover:bg-default/70',
						'group-data-[focused=true]:bg-default-200/50',
						'dark:group-data-[focused=true]:bg-default/60',
						'!cursor-text',
					],
				}}
			/>

			<Button fullWidth role='submit' type={'submit'}>
				Submit
			</Button>
		</form>
	);
}
