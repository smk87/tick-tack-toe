// Library imports
import { Box, Button, FormControl, Grid, Input, InputAdornment, InputLabel, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';

// File imports
import { useStyles } from './EnterPlayerName.styles';
import { Menu } from 'store/game';
import { useChangeMenu } from 'hooks';

export const EnterPlayerName = (): ReactElement => {
	const changeMenu = useChangeMenu();

	const { playerNameForm, startMatch, buttonWrapper, exit } = useStyles();

	const handleExitToMainMenu = (): void => {
		changeMenu(Menu.MAIN_MENU);
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
							startAdornment={
								<InputAdornment position='start'>
									<AccountCircle />
								</InputAdornment>
							}
						/>
					</FormControl>
				</Grid>

				<Grid item>
					<FormControl>
						<InputLabel htmlFor='player2'>Player 2 Name</InputLabel>
						<Input
							id='player2'
							startAdornment={
								<InputAdornment position='start'>
									<AccountCircle />
								</InputAdornment>
							}
						/>
					</FormControl>
				</Grid>
			</Grid>
			<Grid container className={buttonWrapper} justifyContent='center'>
				<Grid item>
					<Button className={startMatch} variant='contained' color='primary'>
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
