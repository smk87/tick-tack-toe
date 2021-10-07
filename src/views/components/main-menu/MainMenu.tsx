// Library imports
import { Box, Button } from '@material-ui/core';
import React, { ReactElement } from 'react';

// File imports
import { useStyles } from './MainMenu.types';

export const MainMenu = (): ReactElement => {
	const { mainMenu, startGame } = useStyles();

	return (
		<Box className={mainMenu} display='flex' justifyContent='center' alignItems='center'>
			<Button className={startGame} variant='contained' color='primary'>
				Start Game
			</Button>
		</Box>
	);
};
