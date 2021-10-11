// Library imports
import { Box, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

// File imports
import { EnterPlayerName, MainMenu, PlayMenu } from '..';
import { useStyles } from './Game.styles';
import { RootState } from 'store';
import { Menu } from 'store/menu';

export const Game = (): ReactElement => {
	const menuState = useSelector((state: RootState) => state.menu?.menuState);

	const { game } = useStyles();

	const renderMenu = (): ReactElement => {
		switch (menuState?.currentMenu) {
			case Menu.MAIN_MENU:
				return <MainMenu />;

			case Menu.PLAYER_NAME_MENU:
				return <EnterPlayerName />;

			case Menu.PLAY_MENU:
				return <PlayMenu />;

			default:
				return <MainMenu />;
		}
	};

	return (
		<Box display='flex' flexDirection='column' justifyContent='space-around' alignItems='center' className={game}>
			<Typography align='center' variant='h3'>
				Tick Tack Toe
			</Typography>

			{renderMenu()}
		</Box>
	);
};
