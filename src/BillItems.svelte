<script>
    import { bills } from './stores.js';
    export let index;
    export let billItems;
    let name = '';
    $: total = billItems.reduce((sum, value) => 
        parseFloat(value) ? sum + parseFloat(value) : sum, 0);

    function changeItem(itemIndex, item) {
        bills.updateBill(index, itemIndex, item);
    }
</script>

<div class="container">
    <input type="text" bind:value={name} placeholder="Name">

    {#each billItems as item, itemIndex}
        <div>
            <input 
                type="text"
                bind:value={item}
                on:change={changeItem(itemIndex, item)}
                placeholder="Cost"
            >
        </div>
    {/each}

    {#if name}
        <div>
            <span>Total for {name}: {total}</span>
        </div>
    {/if}
    <div>
        <button on:click={bills.addItem(index)}>+</button>
        <button on:click={bills.removeItem(index)}>-</button>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        margin: 5px;
        padding: 2px;
        border: 1px solid black;
    }
</style>