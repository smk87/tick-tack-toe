// Library imports
import { Grid } from '@material-ui/core';
import React, { ReactElement } from 'react';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CloseIcon from '@material-ui/icons/Close';

// File imports
import { useStyles } from './Board.styles';
import { dispatchers } from 'store/player';
import { dispatchers as menuDispatcher } from 'store/menu';
import { RootState } from 'store';
import { useDispatch, useSelector } from 'react-redux';

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
	const dispatch = useDispatch();
	const currentTurn = useSelector((state: RootState) => state.menu.menuState.currentTurn);
	const nextTurn = useSelector((state: RootState) => state.menu.menuState.nextTurn);
	const player1Moves = useSelector((state: RootState) => state.player.playerState.player1.moves);
	const player2Moves = useSelector((state: RootState) => state.player.playerState.player2.moves);

	const { boardCell, board } = useStyles();

	const isNextTurn = (): boolean => {
		return currentTurn === nextTurn;
	};

	const handleBoardCellClick = (index: number): void => {
		if (player1Moves.indexOf(index) < 0 && player2Moves.indexOf(index) < 0 && !isNextTurn()) {
			dispatch(dispatchers.updateMove({ [currentTurn]: index }));
			dispatch(
				menuDispatcher.changeNextTurn({
					nextTurn: currentTurn,
				})
			);
		}
	};

	const renderMoveSign = (index: number): JSX.Element | undefined => {
		if (player1Moves.indexOf(index) >= 0) {
			return <RadioButtonUncheckedIcon />;
		} else if (player2Moves.indexOf(index) >= 0) {
			return <CloseIcon />;
		}
	};

	const renderBoardCells = (): JSX.Element[] => {
		return boardCellValue.map((value, index) => (
			<Grid onClick={() => handleBoardCellClick(index)} item xs={4} key={index} className={boardCell}>
				{renderMoveSign(index)}
			</Grid>
		));
	};

	return (
		<Grid container justifyContent='center' className={board}>
			{renderBoardCells()}
		</Grid>
	);
};
