'use client';

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
			<Tabs variant='bordered' color={'default'}>
				<Tab key='Create' title='Create Blog'>
					<Card className={' bg-neutral-900 mt-12 border-2'}>
						<CardBody className={'text-black/80'}>
							<BlogForm />
						</CardBody>
					</Card>
				</Tab>

				<Tab key='manage' title='Manage Blogs'>
					<Card className={'bg-neutral-900'}>
						<CardBody className={'text-black/80'}>
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
							officia deserunt mollit anim id est laborum.
						</CardBody>
					</Card>
				</Tab>
			</Tabs>
		</div>
	);
}
