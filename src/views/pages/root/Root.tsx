// Library imports
import React, { ReactElement } from 'react';
import { Container } from '@material-ui/core';

// File imports
import { useStyles } from './Root.styles';
import { Game } from 'views/components';

export const Root = (): ReactElement => {
	const { container } = useStyles();

	return (
		<Container className={container} maxWidth='xl'>
			<Game />
		</Container>
	);
};
