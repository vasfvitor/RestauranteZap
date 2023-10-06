<script>
    import S1CartFlyout from '~/components/Cart/Steps/S1CartFlyout.svelte';
    import S2CheckoutForm from '~/components/Cart/Steps/S2CheckoutForm.svelte';
    import S3CartSummary from '~/components/Cart/Steps/S3CartSummary.svelte';
    import StepWrapper from '~/components/Cart/Steps/StepWrapper.svelte';
    import { cartQuantity } from '~/components/Cart/cartStore';
    import { fade } from 'svelte/transition';

    let stepCart = 1;
    let isOverflowHidden = false;

    let qty = 0;

    cartQuantity.subscribe((newQty) => {
        qty = newQty;
    });

    function openModal() {
        document.getElementById('meuCarrinho').showModal();
        document.body.classList.add('modal-open');
    }
    function closeModal() {
        document.body.classList.remove('modal-open');
    }

    function LoadStep(step) {
        isOverflowHidden = true;
        setTimeout(() => {
            isOverflowHidden = false;
        }, 400);
        stepCart = step;
    }
</script>

<!-- Botão para abrir o carrinho -->
<div class="indicator">
    <button on:click={openModal} class="abrir btn">
        {#key qty}
            <span
                class:badge-primary={qty > 0}
                transition:fade
                class="badge indicator-item indicator-start indicator-top">{qty}</span
            >
        {/key}

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            ><path
                fill="currentColor"
                d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"
            /></svg
        ></button
    >
</div>
<!-- MODAL: -->
<dialog id="meuCarrinho" class="modal">
    <div
        class="modal-box m-0 h-screen max-h-none w-full max-w-none rounded-none p-0"
        class:overflow-hidden={isOverflowHidden}
    >
        <div class="container py-8">
            <!-- Cabeçalho do carrinho onde mostra os passos e o botão de fechar -->
            <div>
                <div class="flex flex-col-reverse text-center md:flex-row md:justify-between">
                    <ul class="steps">
                        <!-- Passos step-primary -->
                        <li id="passo1" class="step step-primary"></li>
                        <li id="passo2" class="step" class:step-primary={stepCart == 2 || stepCart == 3}></li>
                        <li id="passo3" class="step" class:step-primary={stepCart == 3}></li>
                    </ul>
                    <div class="mx-auto mb-8 md:m-0">
                        <form method="dialog" >
                            <!-- Fechar o modal (carrinho)-->
                           
                            <button on:click={closeModal} class="fechar btn">Fechar</button>
                        </form>
                        <!-- Fechar com botão ESC -->
                        <form method="dialog" class="modal-backdrop">
                            <button>close</button>
                        </form>
                    </div>
                </div>
            </div>
            <!--x-->

            {#if stepCart === 1}
                <StepWrapper ID="etapa1" title="Meu carrinho:" {LoadStep}>
                    <S1CartFlyout />
                </StepWrapper>
            {:else if stepCart === 2}
                <StepWrapper ID="etapa2" title="Endereço de entrega:" {LoadStep}>
                    <S2CheckoutForm />
                </StepWrapper>
            {:else if stepCart === 3}
                <StepWrapper ID="etapa3" title="Resumo do pedido:" {LoadStep}>
                    <S3CartSummary />
                </StepWrapper>
            {/if}
            <!--x-->
        </div>
    </div>
</dialog>
