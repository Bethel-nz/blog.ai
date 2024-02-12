'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Env from '@/util/Env';
export default function NavBar() {
	const pathName = usePathname();
	const activeLink = (url: string) => pathName === url;
	const isDevelopmentMode = Env();
	return (
		<div>
			<nav className=' flex w-72 justify-between px-5 mt-4 items-center gap-6 h-14 rounded-lg border-[1px] border-neutral-700 bg-neutral-900 m-auto text-md mb-8'>
				<div>
					<Link href={'/'} prefetch={true}>
						<svg
							width='24'
							height='24'
							viewBox='0 0 50 39'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='ml-2 fill-neutral-50'
						>
							<path
								d='M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z'
								stopColor='#000000'
							></path>
							<path
								d='M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z'
								stopColor='#000000'
							></path>
						</svg>
					</Link>
				</div>
				<div className={'flex space-x-4 items-center'}>
					<Link href='/' prefetch={true} className='block '>
						<>
							<span
								className={`${
									activeLink('/') ? 'text-white' : 'text-neutral-500'
								}  hover:text-white`}
							>
								Blogs
							</span>
						</>
					</Link>
					{isDevelopmentMode && (
						<Link href='/manage-blog' prefetch={true} className='block '>
							<>
								<span
									className={`${
										activeLink('/manage-blog')
											? 'text-white'
											: 'text-neutral-500'
									} hover:text-white`}
								>
									Manage-Blog
								</span>
							</>
						</Link>
					)}
				</div>
			</nav>
		</div>
	);
}
