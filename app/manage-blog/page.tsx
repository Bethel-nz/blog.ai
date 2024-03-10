'use client';

import { ListBlogs } from '@/components/ListBlogs';
import BlogForm from '@/components/create-blog-form';
import {
	Tabs,
	Tab,
	Card,
	CardBody,
	CardHeader,
	Input,
	Textarea,
} from '@nextui-org/react';

export default function ManageBlog() {
	return (
		<div className='flex  flex-col md:w-[28em] w-[22em] mt-8 h-[100dvh]'>
			<Tabs variant='bordered' color={'default'} fullWidth={true}>
				<Tab key='Create' title='Create Blog'>
					<Card className={' bg-neutral-800 h-[33rem] shadow-sm'}>
						<CardBody className={'text-black/80 flex'}>
							<BlogForm />
						</CardBody>
					</Card>
				</Tab>

				<Tab key='manage' title='Manage Blogs'>
					<Card className={'bg-neutral-800 shadow-sm'}>
						<CardBody className={'text-white'}>
							<ListBlogs />
						</CardBody>
					</Card>
				</Tab>
			</Tabs>
		</div>
	);
}
