/* eslint-disable @typescript-eslint/no-explicit-any */

import { player } from './actionTypes';
import { ActionReturnType } from 'store/store.types';
import { UpdateNamePayload } from './player.types';

export const playerActions = {
	UPDATE_NAME: (payload: UpdateNamePayload): ActionReturnType<UpdateNamePayload> => ({
		type: player.UPDATE_NAME,
		payload,
	}),
};
