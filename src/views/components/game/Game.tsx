import { Box, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { EnterPlayerName, MainMenu } from '..';
import { useStyles } from './Game.styles';

export const Game = (): ReactElement => {
	const { game } = useStyles();

	return (
		<Box display='flex' flexDirection='column' justifyContent='space-around' alignItems='center' className={game}>
			<Typography align='center' variant='h3'>
				Tick Tack Toe
			</Typography>
			<EnterPlayerName />
			<MainMenu />
		</Box>
	);
};
