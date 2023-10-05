<script>
    import { cartItems } from '~/components/SvelteCart/cartStore';
</script>

{#each Object.values($cartItems) as cartItem}
    {#if cartItem.quantity > 0}
        <div class="my-4 flex w-full items-center text-start">
            <img class="mask mask-squircle mx-4 h-8 w-8" src="/temp.png" alt={cartItem.name} />

            <div class=" grow text-start font-black">
                <p class="text-lg">{cartItem.name}</p>
                <p class="text-sm font-normal text-yellow-500">
                    R${cartItem.price} | R${cartItem.totalPrice.toFixed(2)}
                </p>
            </div>
            <p class=" join-item my-auto w-4 text-center">×{cartItem.quantity}</p>
        </div>
    {/if}
{/each}
