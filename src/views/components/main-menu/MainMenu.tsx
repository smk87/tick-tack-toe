// Library imports
import { Box, Button } from '@material-ui/core';
import React, { ReactElement } from 'react';

// File imports
import { useStyles } from './MainMenu.types';
import { Menu } from 'store/menu';
import { useChangeMenu } from 'hooks';

export const MainMenu = (): ReactElement => {
	const changeMenu = useChangeMenu();
	const { mainMenu, startGame } = useStyles();

	const handleStartGame = (): void => {
		changeMenu(Menu.PLAYER_NAME_MENU);
	};

	return (
		<Box className={mainMenu} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
			<Button onClick={handleStartGame} className={startGame} variant='contained' color='primary'>
				Start Game
			</Button>
		</Box>
	);
};
