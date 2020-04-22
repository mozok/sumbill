<script>
	import BillTotal from './BillTotal.svelte';
	import BillItems from './BillItems.svelte';
	import { bills } from './stores.js';	

</script>

<main>
	<BillTotal />

	<div class="container">
		{#each $bills as billItems, index}
			<BillItems {index} {billItems} />
		{/each}
	</div>

	<div>
		<button on:click={bills.addBill}>+</button>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.container {
		display: flex;
		flex-wrap: wrap;
	}
</style>