import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
	createStyles({
		playerNameForm: {
			margin: '2rem',

			'& .MuiFormControl-root': {
				paddingRight: '2rem',
			},
		},
	})
);
