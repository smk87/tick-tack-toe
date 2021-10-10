// Library imports
import { Box, Button, Grid, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// File imports
import { useStyles } from './PlayMenu.styles';
import { Menu } from 'store/menu';
import { useChangeMenu } from 'hooks';
import { dispatchers } from 'store/menu';
import { Board } from '..';
import { Player } from 'store/player';
import { RootState } from 'store';
import { store } from 'store/actionTypes';

export const PlayMenu = (): ReactElement => {
	const dispatch = useDispatch();
	const menuState = useSelector((state: RootState) => state.menu?.menuState);
	const playerState = useSelector((state: RootState) => state.player?.playerState);

	const changeMenu = useChangeMenu();
	const { playMenu, pass, buttonWrapper, exit, turnText } = useStyles();

	const handlePass = (): void => {
		dispatch(
			dispatchers.changeTurn({
				turn: menuState.currentTurn === Player.PLAYER_1 ? Player.PLAYER_2 : Player.PLAYER_1,
				nextTurn: menuState.currentTurn,
			})
		);
	};

	const handleExitToMainMenu = (): void => {
		changeMenu(Menu.MAIN_MENU);
		dispatch({ type: store.RESET_APP });
	};

	const isNextTurn = (): boolean => {
		return menuState.currentTurn === menuState.nextTurn;
	};

	return (
		<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
			<Grid justifyContent='center' alignItems='center' container className={playMenu}>
				<Grid item xs={12} className={turnText}>
					<Typography align='center' variant='h5'>
						{menuState.currentTurn === Player.PLAYER_1
							? `${playerState.player1.name}'s`
							: `${playerState.player2.name}'s`}{' '}
						Turn
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Board />
				</Grid>
			</Grid>
			<Grid container className={buttonWrapper} justifyContent='center'>
				<Grid item>
					<Button
						onClick={handlePass}
						disabled={!isNextTurn()}
						className={pass}
						variant='contained'
						color='primary'
					>
						Pass
					</Button>
				</Grid>

				<Grid item>
					<Button className={exit} onClick={handleExitToMainMenu} variant='contained' color='default'>
						Exit to Main Menu
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
};
