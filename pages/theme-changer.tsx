import React, { ChangeEvent, useState } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { Layout } from '@/components/layouts';
import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import Cookies from 'js-cookie';
import { VALID_THEMES } from '@/constants';

interface Props {
	theme: 'light' | 'dark' | 'custom'
}

const ThemeChangerPage: React.FC<Props> = ({theme}) => { 		

	const [currentTheme, setCurrentTheme] = useState<string>(theme);

	const handleThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
		const selectedTheme = event.target.value;

		setCurrentTheme(selectedTheme);

		Cookies.set("theme", selectedTheme);
	}

	return (
		<Layout>
			<Card>
				<CardContent>

					<FormControl>

						<FormLabel>Theme</FormLabel>
						<RadioGroup
							value={currentTheme}
							onChange={handleThemeChange}
						>
							<FormControlLabel value="light" control={<Radio />} label="Light" />
							<FormControlLabel value="dark" control={<Radio />} label="Dark" />
							<FormControlLabel value="custom" control={<Radio />} label="Custom" />
						</RadioGroup>
						
					</FormControl>

				</CardContent>
			</Card>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
	
	const { theme = 'light' } = ctx.req.cookies;

	return {
		props: {
			theme: VALID_THEMES.find(option=>option === theme) ?? "light",		
		}
	}
}

export default ThemeChangerPage;
