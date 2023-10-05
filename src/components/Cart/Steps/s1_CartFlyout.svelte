<script>
    import { cartItems } from '~/components/Cart/cartStore';
    import AddToCartForm from '~/components/Cart/AddToCartForm.svelte';
    import { fade } from 'svelte/transition';
    // import * as eases from 'svelte/easing';
</script>

{#if Object.values($cartItems).length}
    <aside class="mx-auto w-full">
        {#each Object.values($cartItems) as cartItem}
            {#if cartItem.quantity > 0}
                <div
                    in:fade={{ duration: 400 }}
                    out:fade={{ duration: 250 }}
                    class=" my-4 flex w-full items-center text-start"
                >
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
                            <p class=" join-item my-auto w-8 text-center">{cartItem.quantity}</p>
                            <button class="btn btn-square btn-accent join-item btn-sm" type="submit" value="remove"
                                >-</button
                            >
                        </div>
                        <button value="clear" class="btn btn-error btn-sm">X</button>
                    </AddToCartForm>
                </div>
            {/if}
        {/each}
    </aside>
{:else}
    <p>Seu carrinho esta vazio :/</p>
{/if}
