import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextUIProvider } from '@/context/NextUIProvider';
import Wrapper from '@/context/Wrapper';
import NavBar from '@/components/nav-bar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Blog.ai',
	description: 'Blog WebSite with Ai Generated Content',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<NextUIProvider>
					<Wrapper>
						<NavBar />
						{children}
					</Wrapper>
				</NextUIProvider>
			</body>
		</html>
	);
}
