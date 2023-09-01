import React from 'react';
import { AppBar, IconButton, Toolbar, Link, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
import NextLink from 'next/link';

export const Navbar = () => {
	return (
		<AppBar position="sticky" elevation={0}>
			<Toolbar>
				<IconButton size="large" edge="start">
					<MenuOutlined />
				</IconButton>

				<NextLink href="/">
					<Typography variant="h6" color="white">
						Cookie Master
					</Typography>
				</NextLink>

				<div style={{ flexGrow: 1 }} />

				<NextLink href="/theme-changer">
					<Typography variant="h6" color="white">
						Change theme
					</Typography>
				</NextLink>
			</Toolbar>
		</AppBar>
	);
};
