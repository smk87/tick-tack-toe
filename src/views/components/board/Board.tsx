// Library imports
import { Grid, Typography } from '@material-ui/core';
import React, { ReactElement, useEffect, useState } from 'react';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';

// File imports
import { useStyles } from './Board.styles';
import { dispatchers, Player } from 'store/player';
import { dispatchers as menuDispatcher, MatchStatus } from 'store/menu';
import { RootState } from 'store';

const winningIndexes = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export const Board = (): ReactElement => {
	const [hasWon, setHasWon] = useState(false);
	const dispatch = useDispatch();
	const { currentTurn, nextTurn, matchStatus } = useSelector((state: RootState) => state.menu.menuState);
	const { moves: player1Moves, name: player1Name } = useSelector(
		(state: RootState) => state.player.playerState.player1
	);
	const { moves: player2Moves, name: player2Name } = useSelector(
		(state: RootState) => state.player.playerState.player2
	);

	const { boardCell, board, matchResult } = useStyles();

	useEffect(() => {
		checkForWin();

		if (isMatchTied() || isMatchFinished()) {
			dispatch(menuDispatcher.changeMatchStatus({ status: MatchStatus.FINISHED }));
		}
	}, [hasWon, player1Moves, player2Moves]);

	useEffect(() => {
		if (matchStatus === MatchStatus.ONGOING) {
			setHasWon(false);
		}
	}, [matchStatus]);

	const isNextTurn = (): boolean => {
		return currentTurn === nextTurn;
	};

	const checkMoves = (moves: number[]): void => {
		for (let index = 0; index < winningIndexes.length; index++) {
			const winningPositions = winningIndexes[index];
			let moveMatched = 0;

			for (let innerIndex = 0; innerIndex < moves.length; innerIndex++) {
				const move = moves[innerIndex];

				if (winningPositions.indexOf(move) >= 0) {
					moveMatched += 1;
				}

				if (moveMatched === 3) {
					setHasWon(true);

					break; // Breaks loop when 3 moves are matched
				}
			}

			if (moveMatched === 3) {
				break; // Breaks loop when 3 moves are matched
			}
		}
	};

	const checkForWin = (): void => {
		if (currentTurn === Player.PLAYER_1 && player1Moves.length >= 3) {
			checkMoves(player1Moves);
		} else if (currentTurn === Player.PLAYER_2 && player2Moves.length >= 3) {
			checkMoves(player2Moves);
		}
	};

	const isMatchFinished = (): boolean => {
		return hasWon && player1Moves.length + player2Moves.length > 0;
	};

	const isMatchTied = (): boolean => {
		return !hasWon && player1Moves.length + player2Moves.length === 9;
	};

	const handleBoardCellClick = (index: number): void => {
		if (
			player1Moves.indexOf(index) < 0 &&
			player2Moves.indexOf(index) < 0 &&
			!isNextTurn() &&
			matchStatus === MatchStatus.ONGOING
		) {
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
		return Array.from({ length: 9 }).map((value, index) => (
			<Grid onClick={() => handleBoardCellClick(index)} item xs={4} key={index} className={boardCell}>
				{renderMoveSign(index)}
			</Grid>
		));
	};

	const renderMatchResult = (): JSX.Element => {
		return (
			<Grid container justifyContent='center' className={matchResult}>
				<Grid item xs={12}>
					{isMatchTied() ? (
						<Typography color='primary' align='center' variant='h6'>
							Match Tied
						</Typography>
					) : isMatchFinished() ? (
						<Typography color='primary' align='center' variant='h6'>{`${
							currentTurn === Player.PLAYER_1 ? player1Name : player2Name
						} has won`}</Typography>
					) : null}
				</Grid>
			</Grid>
		);
	};

	return (
		<>
			<Grid container justifyContent='center' className={board}>
				{renderBoardCells()}
			</Grid>

			{renderMatchResult()}
		</>
	);
};
