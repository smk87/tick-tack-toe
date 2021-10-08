// Library imports
import { Box, Button } from '@material-ui/core';
import React, { MouseEvent, ReactElement } from 'react';

// File imports
import { useStyles } from './MainMenu.types';

export const MainMenu = (): ReactElement => {
	const { mainMenu, startGame } = useStyles();

	const handleStartGame = (event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
		//
	};

	return (
		<Box className={mainMenu} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
			<Button onClick={handleStartGame} className={startGame} variant='contained' color='primary'>
				Start Game
			</Button>
		</Box>
	);
};
