// File import
import { ActionReturnType } from 'store/store.types';
import { player } from './actionTypes';
import { PlayerState } from './player.types';

const initialState: PlayerState = {
	playerState: {
		player1: {
			name: '',
			moves: [],
		},
		player2: {
			name: '',
			moves: [],
		},
	},
};

export const playerReducer = (state: PlayerState = initialState, action: ActionReturnType): PlayerState => {
	switch (action.type) {
		case player.UPDATE_NAME:
			return {
				...state,
				playerState: {
					...state.playerState,
					player1: { ...state.playerState.player1, name: action.payload?.player1 },
					player2: { ...state.playerState.player2, name: action.payload?.player2 },
				},
			};

		case player.UPDATE_MOVE: {
			const updatedPlayer1Moves = [...state.playerState.player1.moves];
			const updatedPlayer2Moves = [...state.playerState.player2.moves];

			if (action.payload?.player1 !== undefined) {
				updatedPlayer1Moves.push(action.payload?.player1);
			}

			if (action.payload?.player2 !== undefined) {
				updatedPlayer2Moves.push(action.payload?.player2);
			}

			return {
				...state,
				playerState: {
					...state.playerState,
					player1: { ...state.playerState.player1, moves: updatedPlayer1Moves },
					player2: { ...state.playerState.player2, moves: updatedPlayer2Moves },
				},
			};
		}

		case player.PLAY_AGAIN:
			return {
				...state,
				playerState: {
					...state.playerState,
					player1: { ...state.playerState.player1, moves: [] },
					player2: { ...state.playerState.player2, moves: [] },
				},
			};

		// Default state
		default:
			return state;
	}
};
