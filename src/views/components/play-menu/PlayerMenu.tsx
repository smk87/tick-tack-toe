// Library imports
import { Box, Button, FormControl, Grid, Input, InputAdornment, InputLabel, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';

// File imports
import { useStyles } from './PlayeMenu.styles';
import { Menu } from 'store/menu';
import { useChangeMenu, useFormFields } from 'hooks';
import { useDispatch } from 'react-redux';
import { dispatchers } from 'store/player';

export const PlayerMenu = (): ReactElement => {
	const dispatch = useDispatch();

	const [fields, handleFieldChange] = useFormFields({ player1Name: '', player2Name: '' });
	const changeMenu = useChangeMenu();
	const { playerNameForm, startMatch, buttonWrapper, exit } = useStyles();

	const handleStartMatch = (): void => {
		dispatch(
			dispatchers.updateName({
				player1: fields.player1Name,
				player2: fields.player2Name,
			})
		);
	};

	const handleExitToMainMenu = (): void => {
		changeMenu(Menu.MAIN_MENU);
	};

	return (
		<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
			<Grid justifyContent='center' container spacing={3} className={playerNameForm}>
				<Grid item>
					<h1>Board Here</h1>
				</Grid>
			</Grid>
			<Grid container className={buttonWrapper} justifyContent='center'>
				<Grid item>
					<Button onClick={handleStartMatch} className={startMatch} variant='contained' color='primary'>
						Start Match
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
