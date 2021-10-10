/* eslint-disable @typescript-eslint/no-explicit-any */

import { menu } from './actionTypes';
import { ActionReturnType } from 'store/store.types';
import { ChangeMenuPayload, ChangeTurnPayload, ChangeNextTurnPayload, ChangeMatchStatusPayload } from './menu.types';

export const menuActions = {
	CHANGE: (payload: ChangeMenuPayload): ActionReturnType<ChangeMenuPayload> => ({
		type: menu.CHANGE,
		payload,
	}),
	CHANGE_TURN: (payload: ChangeTurnPayload): ActionReturnType<ChangeTurnPayload> => ({
		type: menu.CHANGE_TURN,
		payload,
	}),
	CHANGE_NEXT_TURN: (payload: ChangeNextTurnPayload): ActionReturnType<ChangeNextTurnPayload> => ({
		type: menu.CHANGE_NEXT_TURN,
		payload,
	}),
	CHANGE_MATCH_STATUS: (payload: ChangeMatchStatusPayload): ActionReturnType<ChangeMatchStatusPayload> => ({
		type: menu.CHANGE_MATCH_STATUS,
		payload,
	}),
};
