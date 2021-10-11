// Library imports
import { Dispatch } from 'redux';

// File imports
import { menuActions } from './actions';
import { ChangeTurnPayload, ChangeMenuPayload, ChangeNextTurnPayload, ChangeMatchStatusPayload } from './menu.types';

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
	changeNextTurn:
		(payload: ChangeNextTurnPayload) =>
		(dispatch: Dispatch): void => {
			dispatch(menuActions.CHANGE_NEXT_TURN(payload));
		},
	changeMatchStatus:
		(payload: ChangeMatchStatusPayload) =>
		(dispatch: Dispatch): void => {
			dispatch(menuActions.CHANGE_MATCH_STATUS(payload));
		},
	playAgain:
		() =>
		(dispatch: Dispatch): void => {
			dispatch(menuActions.PLAY_AGAIN());
		},
};
