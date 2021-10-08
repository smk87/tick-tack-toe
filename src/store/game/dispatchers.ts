/* eslint-disable @typescript-eslint/no-explicit-any */
// Library imports
import { Dispatch } from 'redux';

// File imports
import { menuActions } from './actions';
import { ChangeMenuPayload } from './game.types';
import { gameMethods } from './methods';

export const dispatchers = {
	[gameMethods.CHANGE_MENU]:
		(payload: ChangeMenuPayload) =>
		(dispatch: Dispatch): void => {
			dispatch(menuActions.CHANGE(payload));
		},
};
