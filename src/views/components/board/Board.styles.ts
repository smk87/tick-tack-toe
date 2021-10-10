import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
	createStyles({
		board: {
			width: '100%',
		},
		boardCell: {
			background: theme.palette.common.white,
			border: `1px solid ${theme.palette.primary.main}`,
			borderRadius: '4px',
			maxWidth: '4.25rem',
			height: '4.25rem',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			cursor: 'pointer',

			'& .MuiSvgIcon-root': {
				fontSize: '2rem',
			},
		},
		matchResult: {
			marginTop: '1rem',
		},
	})
);
