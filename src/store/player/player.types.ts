export enum Player {
	PLAYER_1 = 'player1',
	PLAYER_2 = 'player2',
}

export type PlayerState = {
	playerState: {
		[player in Player]: {
			name: string;
		};
	};
};

export type UpdateNamePayload = {
	[player in Player]: string;
};
