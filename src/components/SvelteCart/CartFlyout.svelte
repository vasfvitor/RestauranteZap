<script>
    import { isCartOpen, cartItems, totalItems } from '~/components/SvelteCart/cartStore';
    import AddToCartForm from '~/components/SvelteCart/AddToCartForm.svelte';
</script>

{#if $isCartOpen}
    {#if Object.values($cartItems).length}
        <aside class="mx-auto w-full max-w-screen-md">
            <div class="grid grid-cols-4 text-end font-bold">
                <p>Seu carrinho</p>
            </div>

            {#each Object.values($cartItems) as cartItem}
                {#if cartItem.quantity > 0}
                    <div class="flex w-full items-center text-start">
                        <img class="mask mask-squircle mx-4 h-12 w-12" src="/temp.png" alt={cartItem.name} />

                        <div class=" grow text-start font-black">
                            <p class="text-lg">{cartItem.name}</p>
                            <p class="font-base text-sm text-yellow-500">
                                R${cartItem.price} | R${cartItem.totalPrice}
                            </p>
                        </div>
                        <AddToCartForm itemPrice={cartItem.price} itemId={cartItem.id} itemName={cartItem.name}>
                            <div class="join bg-accent">
                                <button class="btn btn-square btn-accent join-item btn-sm" type="submit" value="add"
                                    >+</button
                                >
                                <p class=" join-item my-auto w-4 text-center">{cartItem.quantity}</p>
                                <button class="btn btn-square btn-accent join-item btn-sm" type="submit" value="remove"
                                    >-</button
                                >
                            </div>
                            <button value="clear" class="btn btn-error btn-sm">X</button>
                        </AddToCartForm>
                    </div>
                {/if}
            {/each}

            <div class="font-base text-gray-800">
                <p>Subtotal: R${$totalItems.toFixed(2)}</p>
                <p class="text-gray-300">Entrega : R$</p>
                <p class="text-lg font-bold">Total: <span class="text-yellow-500">R${$totalItems.toFixed(2)}</span></p>
            </div>
        </aside>
    {:else}
        <p>Seu carrinho esta vazio :/</p>
    {/if}
{/if}
