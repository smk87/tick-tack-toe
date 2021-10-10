// File import
import { Player } from 'store/player';
import { ActionReturnType } from 'store/store.types';
import { MatchStatus } from '.';
import { menu } from './actionTypes';
import { GameState, Menu } from './menu.types';

const initialState: GameState = {
	menuState: {
		currentMenu: Menu.MAIN_MENU,
		currentTurn: Player.PLAYER_1,
		nextTurn: Player.PLAYER_2,
		matchStatus: MatchStatus.NOT_STARTED,
	},
};

export const menuReducer = (state: GameState = initialState, action: ActionReturnType): GameState => {
	switch (action.type) {
		case menu.CHANGE:
			return {
				...state,
				menuState: {
					...state.menuState,
					currentMenu: action.payload?.menu,
				},
			};

		case menu.CHANGE_TURN:
			return {
				...state,
				menuState: {
					...state.menuState,
					currentTurn: action.payload?.turn,
					nextTurn: action.payload?.nextTurn,
				},
			};

		case menu.CHANGE_NEXT_TURN:
			return {
				...state,
				menuState: {
					...state.menuState,
					nextTurn: action.payload?.nextTurn,
				},
			};

		case menu.CHANGE_MATCH_STATUS:
			return {
				...state,
				menuState: {
					...state.menuState,
					matchStatus: action.payload?.status,
				},
			};

		case menu.PLAY_AGAIN:
			return {
				...state,
				menuState: {
					...state.menuState,
					currentTurn: Player.PLAYER_1,
					nextTurn: Player.PLAYER_2,
					matchStatus: MatchStatus.ONGOING,
				},
			};

		// Default state
		default:
			return state;
	}
};
