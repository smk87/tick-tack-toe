// File import
import { ActionReturnType } from 'store/store.types';
import { player } from './actionTypes';
import { PlayerState } from './player.types';

const initialState: PlayerState = {
	playerState: {
		player1: {
			name: '',
		},
		player2: {
			name: '',
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

		// Default state
		default:
			return state;
	}
};
