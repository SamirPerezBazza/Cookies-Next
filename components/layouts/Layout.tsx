import Head from 'next/head';
import React, { PropsWithChildren } from 'react';
import { Navbar } from '../ui';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Head>
				
			</Head>
			<nav>
				<Navbar />
			</nav>
			<main style={{ padding: '20px 50px' }}>{children}</main>
		</>
	);
};
