// Library imports
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// File imports
import { Router } from 'router';
import { persistor, store } from 'store';
import { theme } from 'views/themes';

export const App = (): ReactElement => {
	return (
		<div className='App'>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<Router />
					</ThemeProvider>
				</PersistGate>
			</Provider>
		</div>
	);
};
