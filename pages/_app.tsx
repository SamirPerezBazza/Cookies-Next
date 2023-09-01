import '@/styles/globals.css';
import { customTheme, darkTheme, lightTheme } from '@/themes';
import { Theme } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'


export default function App({ Component, pageProps}: AppProps) {

	const [currentTheme, setCurrentTheme] = useState<Theme>(lightTheme);

	 useEffect(() => {
    
    const cookieTheme = Cookies.get('theme') || 'light';
    const selectedTheme = cookieTheme === 'light'
        ? lightTheme
        : (cookieTheme === 'dark')
          ? darkTheme
          : customTheme;
    
    setCurrentTheme( selectedTheme );
  }, [])

	return (
		<ThemeProvider theme={currentTheme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
