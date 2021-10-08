import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		playerNameForm: {
			margin: '2rem',
		},
		startMatch: {
			width: '12rem',
			height: '3rem',
			marginRight: '2rem',
		},
		exit: {
			width: '12rem',
			height: '3rem',
			background: theme.palette.error.main,
		},
		buttonWrapper: {
			marginTop: '4rem',
			width: '100%',
		},
	})
);
