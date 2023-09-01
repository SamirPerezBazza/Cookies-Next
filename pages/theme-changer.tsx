import React, { ChangeEvent, useState } from 'react';
import { Layout } from '@/components/layouts';
import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

const ThemeChangerPage = () => {

	const [currentTheme, setCurrentTheme] = useState("light")

	const handleThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCurrentTheme(event.target.value);
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

export default ThemeChangerPage;
