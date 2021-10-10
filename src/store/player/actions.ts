/* eslint-disable @typescript-eslint/no-explicit-any */

import { player } from './actionTypes';
import { ActionReturnType } from 'store/store.types';
import { UpdateNamePayload, UpdateMovePayload } from './player.types';

export const playerActions = {
	UPDATE_NAME: (payload: UpdateNamePayload): ActionReturnType<UpdateNamePayload> => ({
		type: player.UPDATE_NAME,
		payload,
	}),
	UPDATE_MOVE: (payload: UpdateMovePayload): ActionReturnType<UpdateMovePayload> => ({
		type: player.UPDATE_MOVE,
		payload,
	}),
	PLAY_AGAIN: (): ActionReturnType => ({
		type: player.PLAY_AGAIN,
	}),
};
