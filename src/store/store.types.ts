// Library imports
import { Dispatch } from 'redux';

// File imports
import { rootReducer } from './reducerCombine';

export type RootState = ReturnType<typeof rootReducer>;

export type ActionTypeGroup = {
	[key: string]: string;
};

export type MethodNameGroup = {
	[key: string]: string;
};

/**
 * type: an action type
 * payload: the payload
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionReturnType<T = any> = {
	type: string;
	payload?: T;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DispatherFunction = (dispatch: Dispatch) => Promise<any> | void;
