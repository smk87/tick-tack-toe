import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
	createStyles({
		game: {
			background: theme.palette.secondary.main,
			width: '60%',
			height: '40rem',
			borderRadius: '4px',
			padding: '1rem',
		},
	})
);
