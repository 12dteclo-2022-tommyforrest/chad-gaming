<script lang="ts">
	import TicTacToeSquare from "$lib/components/TicTacToeSquare.svelte";
	import { Player, type Scores } from "$lib/types/tic-tac-toe";

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

	const gameStats: Record<Player, Scores> = {
		[Player.X]: { wins: 0, losses: 0 },
		[Player.O]: { wins: 0, losses: 0 },
	};

	let isXTurn = true;
	$: gameOver = false;

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
			gameOver = true;

			if (isXTurn) {
				gameStats.X.wins += 1;
				gameStats.O.losses += 1;
			} else {
				gameStats.X.losses += 1;
				gameStats.O.wins += 1;
			}

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
			isXTurn = !isXTurn;
		}
	};
</script>

<h1 class="text-center text-5xl">Tic Tac Toe</h1>

<div class="grid grid-cols-1 md:grid-cols-4">
	<div>
		<h2 class="text-3xl">Player: X</h2>

		<div>
			<p class="text-xl">Wins: {gameStats.X.wins}</p>
			<p class="text-xl">Losses: {gameStats.X.losses}</p>
		</div>
	</div>

	<div class="mx-auto grid aspect-square w-2/3 grid-cols-3 grid-rows-3 md:col-span-2">
		{#each boardPositions as position, index}
			<TicTacToeSquare
				on:click={() => {
					handleTurn(index);
				}}
				disableAnyway={gameOver}
				inner={position}
			/>
		{/each}
	</div>

	<div>
		<h2>Player: O</h2>

		<div>
			<p>Wins: {gameStats.O.wins}</p>
			<p>Losses: {gameStats.O.losses}</p>
		</div>
	</div>
</div>
