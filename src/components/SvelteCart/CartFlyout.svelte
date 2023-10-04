<script>
    import { isCartOpen, cartItems, totalItems } from '~/components/SvelteCart/cartStore';
    import AddToCartForm from '~/components/SvelteCart/AddToCartForm.svelte';
</script>

{#if $isCartOpen}
    {#if Object.values($cartItems).length}
        <aside class="mx-auto w-full max-w-screen-md">
            <div class="grid grid-cols-4 text-end font-bold">
                <p></p>
                <p>Produto</p>
                <p>Quantidade</p>
                <p>Preço</p>
            </div>
            {#each Object.values($cartItems) as cartItem}
                {#if cartItem.quantity > 0}
                    <div class="grid grid-cols-4 items-center text-end">
                        <!-- <img src={cartItem.imageSrc} alt={cartItem.name} /> -->
                        <p>
                            <AddToCartForm itemPrice={cartItem.price} itemId={cartItem.id} itemName={cartItem.name}>
                                <button class="btn btn-square" type="submit" value="add">+</button>
                                <button class="btn btn-square" type="submit" value="remove">-</button>
                            </AddToCartForm>
                        </p>
                        <p>{cartItem.name}</p>
                        <p>{cartItem.quantity}</p>
                        <p>R${cartItem.price.toFixed(2)}</p>
                    </div>
                {/if}
            {/each}
            <div class="text-end font-bold"><p>Total: R${$totalItems.toFixed(2)}</p></div>
        </aside>
    {:else}
        <p>Seu carrinho esta vazio :/</p>
    {/if}
{/if}
