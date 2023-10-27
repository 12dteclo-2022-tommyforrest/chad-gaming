/**
 * Possible variants of a Player.
 */
export enum Player {
	X = "X",
	O = "O",
}

/**
 * Data held in score records.
 */
export interface Scores {
	wins: number;
	losses: number;
}
