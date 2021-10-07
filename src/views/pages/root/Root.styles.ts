import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
	createStyles({
		container: {
			background: theme.palette.primary.main,
			height: '100vh',
			width: '100vw',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
	})
);
