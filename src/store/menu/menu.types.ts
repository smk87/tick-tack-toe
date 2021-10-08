export enum Menu {
	MAIN_MENU = 'startMenu',
	PLAYER_NAME_MENU = 'playerNameMenu',
	PLAY_MENU = 'playMenu',
}

export enum Player {
	PLAYER_1 = 'player1',
	PLAYER_2 = 'player2',
}

export type GameState = {
	menuState: {
		currentMenu: Menu;
	};
};

export type ChangeMenuPayload = {
	menu: Menu;
};
