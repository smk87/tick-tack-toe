// File import
import { ActionReturnType } from 'store/store.types';
import { menu } from './actionTypes';
import { GameState, Menu } from './game.types';

const initialState: GameState = {
	menuState: {
		currentMenu: Menu.MAIN_MENU,
	},
};

export const gameReducer = (state: GameState = initialState, action: ActionReturnType): GameState => {
	switch (action.type) {
		// Request start
		case menu.CHANGE:
			return {
				...state,
				menuState: {
					...state.menuState,
					currentMenu: action.payload?.menu,
				},
			};

		// Default state
		default:
			return state;
	}
};
