<script>
    import { CarregarEtapa } from '@/components/Cart/logic';
    import { cartItems } from '~/components/SvelteCart/cartStore';
    import CartFooter from '~/components/Cart/CartFooter.svelte';
</script>

<section id="etapa3" class="animate__animated animate__fadeInUp animate__faster container flex hidden flex-col bg-blue-100">
    <div class="my-2 border-y-2 border-gray-200 py-2">
        {#if Object.values($cartItems).length}
            <div class="mx-auto w-full max-w-screen-md">
                <div class="grid grid-cols-4 text-end font-bold">
                    <p>Seu carrinho</p>
                </div>

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
                            <p class=" join-item my-auto w-4 text-center">{cartItem.quantity}</p>
                        </div>
                    {/if}
                {/each}
            </div>
        {:else}
            <p>Seu carrinho esta vazio :/</p>
        {/if}
    </div>
    <CartFooter />
    <div class="flex justify-end gap-4">
        <button on:click={() => CarregarEtapa(2)} class="btn">Voltar</button>
        <button class="btn btn-primary">Finalizar</button>
    </div>
</section>
