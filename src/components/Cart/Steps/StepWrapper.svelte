<script>
    import { fade } from 'svelte/transition';

    import CartTotal from '~/components/Cart/CartTotal.svelte';

    export let ID, title, LoadStep; // props
</script>

<section
    in:fade={{ duration: 100, delay: 250 }}
    out:fade={{ duration: 100 }}
    class="container flex flex-col md:p-4"
    id={ID}
>
    <div class="container my-2 flex flex-col border-y-2 border-gray-200 py-2">
        <div class="prose my-8">
            <h2>{title}</h2>
        </div>
        <slot />
        <CartTotal />

        {#if ID === 'etapa1'}
            <div class="flex justify-end gap-4">
                <button on:click={() => LoadStep(2)} class="btn btn-primary">Continuar</button>
            </div>
        {:else if ID === 'etapa2'}
            <div class="flex justify-end gap-4">
                <button on:click={() => LoadStep(1)} class="btn">Voltar</button>
                <button on:click={() => LoadStep(3)} class="btn btn-primary">Revisar pedido</button>
            </div>
        {:else if ID === 'etapa3'}
            <div class="flex justify-end gap-4">
                <button on:click={() => LoadStep(2)} class="btn">Voltar</button>
                <button class="btn btn-primary">Finalizar</button>
            </div>
        {/if}
    </div>
</section>
