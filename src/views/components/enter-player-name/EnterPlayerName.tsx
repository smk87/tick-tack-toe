// Library imports
import { Box, Button, FormControl, Grid, Input, InputAdornment, InputLabel, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useDispatch } from 'react-redux';

// File imports
import { useStyles } from './EnterPlayerName.styles';
import { MatchStatus, Menu } from 'store/menu';
import { useChangeMenu, useFormFields } from 'hooks';
import { dispatchers } from 'store/player';
import { dispatchers as menuDispatcher } from 'store/menu';
import { store } from 'store/actionTypes';

export const EnterPlayerName = (): ReactElement => {
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
		changeMenu(Menu.PLAY_MENU);
		dispatch(menuDispatcher.changeMatchStatus({ status: MatchStatus.ONGOING }));
	};

	const handleExitToMainMenu = (): void => {
		changeMenu(Menu.MAIN_MENU);
		dispatch({ type: store.RESET_APP });
	};

	return (
		<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
			<Typography variant='h5'>Enter Player Names</Typography>
			<Grid justifyContent='center' container spacing={3} className={playerNameForm}>
				<Grid item>
					<FormControl>
						<InputLabel htmlFor='player1'>Player 1 Name</InputLabel>
						<Input
							id='player1'
							name='player1Name'
							startAdornment={
								<InputAdornment position='start'>
									<AccountCircle />
								</InputAdornment>
							}
							onChange={handleFieldChange}
						/>
					</FormControl>
				</Grid>

				<Grid item>
					<FormControl>
						<InputLabel htmlFor='player2'>Player 2 Name</InputLabel>
						<Input
							id='player2'
							name='player2Name'
							value={fields.player2Name}
							startAdornment={
								<InputAdornment position='start'>
									<AccountCircle />
								</InputAdornment>
							}
							onChange={handleFieldChange}
						/>
					</FormControl>
				</Grid>
			</Grid>
			<Grid container className={buttonWrapper} justifyContent='center'>
				<Grid item>
					<Button
						disabled={!fields.player1Name || !fields.player2Name}
						onClick={handleStartMatch}
						className={startMatch}
						variant='contained'
						color='primary'
					>
						Play
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
