<script>
    import CartFlyout from '@/components/SvelteCart/CartFlyout.svelte';
    import CartFooter from '~/components/Cart/CartFooter.svelte';
    import CheckoutForm from '@/components/Cart/CheckoutForm.svelte';
    import { cartItems } from '~/components/SvelteCart/cartStore';

    import { openModal, closeModal } from '@/components/Cart/logic';

    function LoadStep(step) {
        stepCart = step;
    }

    import { fade } from 'svelte/transition';
    // seleciona todos os botões com a classe abrir
    import { onMount } from 'svelte';

    onMount(() => {
        const btnAbrirModal = document.querySelectorAll('button.abrir');
        btnAbrirModal.forEach((button) => {
            button.addEventListener('click', () => {
                openModal();
            });
        });
        // seleciona todos os botões com a classe fechar
        const btnFecharModal = document.querySelectorAll('button.fechar');
        btnFecharModal.forEach((button) => {
            button.addEventListener('click', () => {
                closeModal();
            });
        });
    });

    let stepCart = 1;
</script>

<!-- Botão para abrir o carrinho -->
<button class="abrir btn">Meu Carrinho</button>
<!-- MODAL: -->
<dialog id="meuCarrinho" class="modal">
    <div class="modal-box m-0 h-screen max-h-none w-full max-w-none rounded-none p-0">
        <div class="container py-8">
            <!-- Cabeçalho do carrinho onde mostra os passos e o botão de fechar -->
            <div>
                <div class="flex flex-col-reverse text-center md:flex-row md:justify-between">
                    <ul class="steps">
                        <!-- Passos step-primary -->
                        <li id="passo1" class="step step-primary"></li>
                        <li id="passo2" class="step"></li>
                        <li id="passo3" class="step"></li>
                    </ul>
                    <div class="mx-auto mb-8 md:m-0">
                        <form method="dialog" class="">
                            <!-- Fechar o modal (carrinho)-->
                            <button class="fechar btn">Fechar</button>
                        </form>
                        <!-- Fechar com botão ESC -->
                        <form method="dialog" class="modal-backdrop">
                            <button>close</button>
                        </form>
                    </div>
                </div>
                <h3 class="prose font-black md:prose-lg">Seu carrinho:</h3>
            </div>
            <!--x-->
            <!-- Corpo do Modal que será ativado de acordo com o script abaixo -->

            {#if stepCart === 1}
                <section
                    in:fade={{ duration: 200, delay: 250 }}
                    out:fade={{ duration: 200 }}
                    id="etapa1"
                    class=" container flex flex-col bg-blue-100"
                >
                    <div class="my-2 flex flex-col border-y-2 border-gray-200 py-2">
                        <CartFlyout />
                    </div>
                    <CartFooter />
                    <div class="flex justify-end gap-4">
                        <button on:click={() => LoadStep(2)} class="btn btn-primary">Continuar</button>
                    </div>
                </section>
            {:else if stepCart === 2}
                <section
                    in:fade={{ duration: 200, delay: 250 }}
                    out:fade={{ duration: 200 }}
                    id="etapa2"
                    class=" container flex flex-col bg-blue-100"
                >
                    <div class="my-2 border-y-2 border-gray-200 py-2">
                        <div class="prose my-8 max-w-none">
                            <h2>Endereço de entrega:</h2>
                            <CheckoutForm />
                        </div>
                    </div>
                    <CartFooter />
                    <div class="inline-flex justify-end gap-4">
                        <button on:click={() => LoadStep(1)} class="btn">Voltar</button>
                        <button on:click={() => LoadStep(3)} class="btn btn-primary">Revisar pedido</button>
                    </div>
                </section>
            {:else if stepCart === 3}
                <section
                    in:fade={{ duration: 200, delay: 250 }}
                    out:fade={{ duration: 200 }}
                    id="etapa3"
                    class=" container flex flex-col bg-blue-100"
                >
                    <div class="my-2 border-y-2 border-gray-200 py-2">
                        {#if Object.values($cartItems).length}
                            <div class="mx-auto w-full max-w-screen-md">
                                <div class="grid grid-cols-4 text-end font-bold">
                                    <p>Seu carrinho</p>
                                </div>

                                {#each Object.values($cartItems) as cartItem}
                                    {#if cartItem.quantity > 0}
                                        <div class="my-4 flex w-full items-center text-start">
                                            <img
                                                class="mask mask-squircle mx-4 h-8 w-8"
                                                src="/temp.png"
                                                alt={cartItem.name}
                                            />

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
                        <button on:click={() => LoadStep(2)} class="btn">Voltar</button>
                        <button class="btn btn-primary">Finalizar</button>
                    </div>
                </section>
            {/if}
            <!--x-->
        </div>
    </div>
</dialog>
