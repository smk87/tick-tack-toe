// File import
import { Player } from 'store/player';
import { ActionReturnType } from 'store/store.types';
import { menu } from './actionTypes';
import { GameState, Menu } from './menu.types';

const initialState: GameState = {
	menuState: {
		currentMenu: Menu.MAIN_MENU,
		currentTurn: Player.PLAYER_1,
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
					currentTurn: action.payload?.nextTurn,
				},
			};

		// Default state
		default:
			return state;
	}
};
