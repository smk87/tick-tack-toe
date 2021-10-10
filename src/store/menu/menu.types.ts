import { Player } from 'store/player';

export enum Menu {
	MAIN_MENU = 'startMenu',
	PLAYER_NAME_MENU = 'playerNameMenu',
	PLAY_MENU = 'playMenu',
}

export enum MatchStatus {
	NOT_STARTED = 'notStarted',
	ONGOING = 'ongoing',
	FINISHED = 'finished',
}

export type GameState = {
	menuState: {
		currentMenu: Menu;
		currentTurn: Player;
		nextTurn: Player;
		matchStatus: MatchStatus;
	};
};

export type ChangeMenuPayload = {
	menu: Menu;
};

export type ChangeTurnPayload = {
	turn: Player;
	nextTurn: Player;
};

export type ChangeNextTurnPayload = {
	nextTurn: Player;
};

export type ChangeMatchStatusPayload = {
	status: MatchStatus;
};
