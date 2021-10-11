// Library imports
import { CombinedState, combineReducers, Reducer } from 'redux';
import { ActionReturnType, RootState } from 'store';

// File imports
import { menuReducer } from './menu';
import { playerReducer } from './player';
import { CombinedStateType } from './store.types';
import { store } from './actionTypes';

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
