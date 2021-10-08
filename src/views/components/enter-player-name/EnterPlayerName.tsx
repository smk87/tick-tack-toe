import { Box, FormControl, Input, InputAdornment, InputLabel, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useStyles } from './EnterPlayerName.styles';

export const EnterPlayerName = (): ReactElement => {
	const { playerNameForm } = useStyles();

	return (
		<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
			<Typography variant='h5'>Enter Player Names</Typography>
			<div className={playerNameForm}>
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
			</div>
		</Box>
	);
};
