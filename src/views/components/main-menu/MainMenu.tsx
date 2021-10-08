// Library imports
import { Box, Button } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { dispatchers, Menu } from 'store/game';

// File imports
import { useStyles } from './MainMenu.types';

export const MainMenu = (): ReactElement => {
	const dispatch = useDispatch();

	const { mainMenu, startGame } = useStyles();

	const handleStartGame = (): void => {
		dispatch(dispatchers.changeMenu({ menu: Menu.PLAYER_NAME_MENU }));
	};

	return (
		<Box className={mainMenu} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
			<Button onClick={handleStartGame} className={startGame} variant='contained' color='primary'>
				Start Game
			</Button>
		</Box>
	);
};
