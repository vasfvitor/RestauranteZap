<script>
    import { cartItems, cartSubTotal } from '~/components/Cart/cartStore';
    import AddToCartForm from '~/components/Cart/AddToCartForm.svelte';
    import { fade } from 'svelte/transition';
    function openModal() {
        document.getElementById('meuCarrinho').showModal();
        document.body.classList.add('modal-open');
    }

    // import * as eases from 'svelte/easing';
</script>

{#if Object.values($cartItems).length}
    <aside class="" in:fade={{ duration: 300, delay: 200 }} out:fade={{ duration: 200 }}>
        <div class="max-w mx-auto max-w-lg">
            {#each Object.values($cartItems) as cartItem}
                {#if cartItem.quantity > 0}
                    <div
                        in:fade={{ duration: 400 }}
                        out:fade={{ duration: 250 }}
                        class="my-2 flex w-full items-center text-start"
                    >
                        <img class="mask mask-squircle mx-4 h-6 w-6" src="/temp.png" alt={cartItem.name} />

                        <div class=" grow text-start font-black">
                            <p class>{cartItem.name}</p>
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
            <div class="my-4 items-end self-end text-center text-gray-800">
                <p class="">Subtotal: R${$cartSubTotal}</p>
                <button on:click={openModal} class="abrir btn btn-primary btn-sm"
                    ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        ><path
                            fill="currentColor"
                            d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"
                        /></svg
                    >Continuar</button
                >
            </div>
        </div>
    </aside>
{:else}
    <p>Seu carrinho esta vazio :/</p>
{/if}
