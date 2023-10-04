<script>
    import { isCartOpen, cartItems, cartSubTotal } from '~/components/SvelteCart/cartStore';
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
                    <div class="my-4 flex w-full items-center text-start">
                        <img class="mask mask-squircle mx-4 h-12 w-12" src="/temp.png" alt={cartItem.name} />

                        <div class=" grow text-start font-black">
                            <p class="text-lg">{cartItem.name}</p>
                            <p class="text-sm font-normal text-yellow-500">
                                R${cartItem.price} | R${cartItem.totalPrice.toFixed(2)}
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
                <p>Subtotal: R${$cartSubTotal}</p>
                <p class="text-gray-300">Entrega : R$</p>
                <p class="text-lg font-normal">
                    Total: <span class="font-bold text-yellow-500">R${$cartSubTotal}</span>
                </p>
            </div>
        </aside>
    {:else}
        <p>Seu carrinho esta vazio :/</p>
    {/if}
{/if}
