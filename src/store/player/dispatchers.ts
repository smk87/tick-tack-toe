/* eslint-disable @typescript-eslint/no-explicit-any */
// Library imports
import { Dispatch } from 'redux';

// File imports
import { playerActions } from './actions';
import { UpdateNamePayload, UpdateMovePayload } from './player.types';

export const dispatchers = {
	updateName:
		(payload: UpdateNamePayload) =>
		(dispatch: Dispatch): void => {
			dispatch(playerActions.UPDATE_NAME(payload));
		},
	updateMove:
		(payload: UpdateMovePayload) =>
		(dispatch: Dispatch): void => {
			dispatch(playerActions.UPDATE_MOVE(payload));
		},
};
