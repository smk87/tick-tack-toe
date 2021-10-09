// Library imports
import { Grid } from '@material-ui/core';
import React, { ReactElement } from 'react';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

// File imports
import { useStyles } from './Board.styles';

const boardCellValue = [
	[0, 0],
	[0, 1],
	[0, 2],
	[1, 0],
	[1, 1],
	[1, 2],
	[2, 0],
	[2, 1],
	[2, 2],
];

export const Board = (): ReactElement => {
	const { boardCell, board } = useStyles();

	const handleBoardCellClick = (value: number[]): void => {
		console.log(value);
	};

	const renderBoardCells = (): JSX.Element[] => {
		return boardCellValue.map((value, index) => (
			<Grid onClick={() => handleBoardCellClick(value)} item xs={4} key={index} className={boardCell}>
				<RadioButtonUncheckedIcon />
			</Grid>
		));
	};

	return (
		<Grid container justifyContent='center' className={board}>
			{renderBoardCells()}
		</Grid>
	);
};
