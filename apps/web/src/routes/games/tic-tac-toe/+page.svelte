<script lang="ts">
	import TicTacToeSquare from "$lib/components/TicTacToeSquare.svelte";
	import { Player, type Scores } from "$lib/types/tic-tac-toe";

	// List of all board positions as a reactive value.
	// This means the HTML will update when these values change.
	$: boardPositions = [
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
	] as Array<Player | undefined>;

	// Current statistics of the players, also in a reactive value.
	// This will update the page when a score changes.
	$: gameStats = {
		[Player.X]: { wins: 0, losses: 0 },
		[Player.O]: { wins: 0, losses: 0 },
	} as Record<Player, Scores>;

	// Value controls which players piece is placed on click.
	let isXTurn = true;
	// Ends the game if this is set to true.
	$: gameOver = false;

	/**
	 * Checks the current move for this player to check if this move has caused them to win the game.
	 * @param player Player which made the move
	 */
	const isWinningMove = (player: Player) => {
		if (
			// Horizontal lines
			(boardPositions[0] === player &&
				boardPositions[1] === player &&
				boardPositions[2] === player) ||
			(boardPositions[3] === player &&
				boardPositions[4] === player &&
				boardPositions[5] === player) ||
			(boardPositions[6] === player &&
				boardPositions[7] === player &&
				boardPositions[8] === player) ||
			// Vertical lines
			(boardPositions[0] === player &&
				boardPositions[3] === player &&
				boardPositions[6] === player) ||
			(boardPositions[1] === player &&
				boardPositions[4] === player &&
				boardPositions[7] === player) ||
			(boardPositions[2] === player &&
				boardPositions[5] === player &&
				boardPositions[8] === player) ||
			// Diagonal lines
			(boardPositions[0] === player &&
				boardPositions[4] === player &&
				boardPositions[8] === player) ||
			(boardPositions[2] === player &&
				boardPositions[4] === player &&
				boardPositions[6] === player)
		) {
			return true;
		} else {
			return false;
		}
	};

	const handleTurn = (index: number) => {
		boardPositions[index] = isXTurn ? Player.X : Player.O;
		boardPositions = [...boardPositions];

		if (isWinningMove(isXTurn ? Player.X : Player.O)) {
			// Winning move was made. End the game.
			gameOver = true;

			// Reflect new scores.
			if (isXTurn) {
				gameStats.X.wins += 1;
				gameStats.O.losses += 1;
				gameStats = { ...gameStats };
			} else {
				gameStats.X.losses += 1;
				gameStats.O.wins += 1;
				gameStats = { ...gameStats };
			}

			// Resets the board after a victory.
			setTimeout(() => {
				gameOver = false;
				boardPositions = [
					undefined,
					undefined,
					undefined,
					undefined,
					undefined,
					undefined,
					undefined,
					undefined,
					undefined,
				];
				isXTurn = true;
			}, 3000);
		} else if (boardPositions.findIndex((value) => value === undefined) == -1) {
			// Resets the board after a draw.
			setTimeout(() => {
				gameOver = false;
				boardPositions = [
					undefined,
					undefined,
					undefined,
					undefined,
					undefined,
					undefined,
					undefined,
					undefined,
					undefined,
				];
				isXTurn = true;
			}, 3000);
		} else {
			// No winning moves were made. Switch the turn to the next player.
			isXTurn = !isXTurn;
		}
	};
</script>

<!-- Operates on the HTML head element -->
<svelte:head>
	<title>Tic Tac Toe | Chad Gaming</title>
</svelte:head>

<h1 class="text-center text-5xl">Tic Tac Toe</h1>

<div class="grid gap-4 md:gap-0 grid-cols-1 p-4 md:grid-cols-4">
	<!-- Player 1 score board. -->
	<div class="grid grid-cols-1 bg-gray-200 w-2/3 md:w-full mx-auto grid-rows-2 rounded-lg border-4 border-black p-4">
		<h2 class="text-3xl">Player: X</h2>

		<div>
			<p class="text-xl">Wins: {gameStats.X.wins}</p>
			<p class="text-xl">Losses: {gameStats.X.losses}</p>
		</div>
	</div>

	<div class="mx-auto grid aspect-square w-2/3 grid-cols-3 grid-rows-3 md:col-span-2">
		<!-- Add a square for each position on the board. -->
		{#each boardPositions as position, index}
			<!-- Creates a square on the board, where inner reflects the player who has clicked this square. -->
			<TicTacToeSquare
				on:click={() => {
					handleTurn(index);
				}}
				disableAnyway={gameOver}
				inner={position}
			/>
		{/each}
	</div>

	<!-- Player 2 score board. -->
	<div class="grid grid-cols-1 bg-gray-200 w-2/3 md:w-full mx-auto grid-rows-2 rounded-lg border-4 border-black p-4">
		<h2 class="text-3xl">Player: O</h2>

		<div>
			<p class="text-xl">Wins: {gameStats.O.wins}</p>
			<p class="text-xl">Losses: {gameStats.O.losses}</p>
		</div>
	</div>
</div>
