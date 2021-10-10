// Library imports
import { CombinedState, combineReducers, Reducer } from 'redux';
import { ActionReturnType, RootState } from 'store';
import { store } from './actionTypes';

// File imports
import { menuReducer } from './menu/reducer';
import { playerReducer } from './player/reducer';
import { CombinedStateType } from './store.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const allReducers: Reducer<CombinedState<CombinedStateType>> = combineReducers({
	/**
	 * Reducers here
	 */
	menu: menuReducer,
	player: playerReducer,
});

export const rootReducer: Reducer<CombinedState<CombinedStateType>> = (
	state: RootState | undefined,
	action: ActionReturnType
) => {
	if (action.type === store.RESET_APP) {
		state = undefined;
	}

	return allReducers(state, action);
};
