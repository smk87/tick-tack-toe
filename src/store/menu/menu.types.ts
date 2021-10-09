import { Player } from 'store/player';

export enum Menu {
	MAIN_MENU = 'startMenu',
	PLAYER_NAME_MENU = 'playerNameMenu',
	PLAY_MENU = 'playMenu',
}

export type GameState = {
	menuState: {
		currentMenu: Menu;
		currentTurn: Player;
	};
};

export type ChangeMenuPayload = {
	menu: Menu;
};

export type ChangeTurnPayload = {
	nextTurn: Player;
};
