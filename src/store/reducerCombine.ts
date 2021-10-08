// Library imports
import { CombinedState, combineReducers, Reducer } from 'redux';

// File imports
import { menuReducer } from './menu/reducer';
import { playerReducer } from './player/reducer';
import { CombinedStateType } from './store.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const rootReducer: Reducer<CombinedState<CombinedStateType>> = combineReducers({
	/**
	 * Reducers here
	 */
	menu: menuReducer,
	player: playerReducer,
});
