// Library imports
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React, { ReactElement } from 'react';

// File imports
import { Router } from 'router';
import { theme } from 'views/themes';

export const App = (): ReactElement => {
	return (
		<div className='App'>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router />
			</ThemeProvider>
		</div>
	);
};
