/* eslint-disable @typescript-eslint/no-explicit-any */
// Library imports
import { Dispatch } from 'redux';
import { ChangeTurnPayload } from '.';

// File imports
import { menuActions } from './actions';
import { ChangeMenuPayload } from './menu.types';

export const dispatchers = {
	changeMenu:
		(payload: ChangeMenuPayload) =>
		(dispatch: Dispatch): void => {
			dispatch(menuActions.CHANGE(payload));
		},
	changeTurn:
		(payload: ChangeTurnPayload) =>
		(dispatch: Dispatch): void => {
			dispatch(menuActions.CHANGE_TURN(payload));
		},
};
