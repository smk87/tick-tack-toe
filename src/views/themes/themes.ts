/**
 * This file is to customize the application theme
 * Helping docs: https://material-ui.com/customization/default-theme
 */

import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
	palette: {
		common: {
			black: '#000',
			white: '#fff',
		},
		primary: {
			main: '#1e3d59',
		},
		secondary: {
			main: '#f5f0e1',
		},
		warning: {
			main: '#ffc13b',
		},
		error: {
			main: '#ff6e40',
		},
		text: {
			primary: '#000',
		},
	},
});
