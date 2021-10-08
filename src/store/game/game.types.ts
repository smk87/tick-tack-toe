export enum Menu {
	START_MENU = 'startMenu',
}

export type GameState = {
	menuState: {
		currentMenu: Menu;
	};
};

export type ChangeMenuPayload = {
	menu: Menu;
};
