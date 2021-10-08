/* eslint-disable @typescript-eslint/no-explicit-any */
// Library imports
import { Dispatch } from 'redux';

// File imports
import { playerActions } from './actions';
import { UpdateNamePayload } from './player.types';

export const dispatchers = {
	updateName:
		(payload: UpdateNamePayload) =>
		(dispatch: Dispatch): void => {
			dispatch(playerActions.UPDATE_NAME(payload));
		},
};
