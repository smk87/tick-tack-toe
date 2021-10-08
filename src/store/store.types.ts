// File imports
import { GameState } from './game/game.types';
import { rootReducer } from './reducerCombine';

export type RootState = ReturnType<typeof rootReducer>;

export type ActionTypeGroup = {
	[key: string]: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionReturnType<T = any> = {
	type: string;
	payload?: T;
};

export type CombinedStateType = {
	game: GameState;
};
