// Library imports
import { CombinedState, combineReducers, Reducer } from 'redux';

// File imports
import { gameReducer } from './game/reducer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const rootReducer: Reducer<CombinedState<any>> = combineReducers({
	/**
	 * Reducers here
	 */
	game: gameReducer,
});
