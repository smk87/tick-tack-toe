/* eslint-disable @typescript-eslint/no-explicit-any */

import { menu } from './actionTypes';
import { ActionReturnType } from 'store/store.types';
import { ChangeMenuPayload } from './game.types';

export const menuActions = {
	CHANGE: (payload: ChangeMenuPayload): ActionReturnType<ChangeMenuPayload> => ({
		type: menu.CHANGE,
		payload,
	}),
};
