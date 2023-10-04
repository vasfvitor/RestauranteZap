<script>
    import { isCartOpen, cartItems, totalPrice } from '~/components/Svelte/cartStore';
    import AddToCartForm from '~/components/Svelte/AddToCartForm.svelte';
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
                {#if cartItem.quantity > 0}
                    <div class="grid grid-cols-4 text-end">
                        <!-- <img src={cartItem.imageSrc} alt={cartItem.name} /> -->
                        <p>
                            <AddToCartForm itemPrice={cartItem.price} itemId={cartItem.id} itemName={cartItem.name}>
                                <button type="submit" value="add"> + </button>
                                <button type="submit" value="remove"> - </button>
                            </AddToCartForm>
                        </p>
                        <p>{cartItem.name}</p>
                        <p>{cartItem.quantity}</p>
                        <p>R${cartItem.price.toFixed(2)}</p>
                    </div>
                {/if}
            {/each}
            <div class="text-end font-bold"><p>Total: R${$totalPrice.toFixed(2)}</p></div>
        </aside>
    {:else}
        <p>Seu carrinho esta vazio :/</p>
    {/if}
{/if}
