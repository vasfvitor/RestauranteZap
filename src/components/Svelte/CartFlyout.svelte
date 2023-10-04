<script>
    import { isCartOpen, cartItems, totalPrice } from '~/components/Svelte/cartStore';
</script>

{#if $isCartOpen}
    {#if Object.values($cartItems).length}
        <aside class="w-full">
            <div class="font-bold grid grid-cols-4 text-end">
                <p></p>
                <p>Produto</p>
                <p>Quantidade</p>
                <p>Preço</p>
            </div>
            {#each Object.values($cartItems) as cartItem}
                <div class="grid grid-cols-4 text-end">
                   
                    <!-- <img src={cartItem.imageSrc} alt={cartItem.name} /> -->
                    <p>[+][-]</p>
                    <p>{cartItem.name}</p>
                    <p>{cartItem.quantity}</p>
                    <p>R${cartItem.price.toFixed(2)}</p>
                </div>
            {/each}
            <div class="text-end font-bold"><p>Total: R${$totalPrice.toFixed(2)}</p></div>
        </aside>
    {:else}
        <p>Seu carrinho esta vazio :/</p>
    {/if}
{/if}
