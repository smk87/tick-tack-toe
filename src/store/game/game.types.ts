export enum Menu {
	MAIN_MENU = 'startMenu',
	PLAYER_NAME_MENU = 'playerNameMenu',
}

export type GameState = {
	menuState: {
		currentMenu: Menu;
	};
};

export type ChangeMenuPayload = {
	menu: Menu;
};
