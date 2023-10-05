<script>
    import s1_CartFlyout from '~/components/Cart/Steps/s1_CartFlyout.svelte';
    import s2_CheckoutForm from '~/components/Cart/Steps/s2_CheckoutForm.svelte';
    import s3_CartSummary from '~/components/Cart/Steps/s3_CartSummary.svelte';
    import StepWrapper from '~/components/Cart/Steps/StepWrapper.svelte';

    function openModal() {
        document.getElementById('meuCarrinho').showModal();
        document.body.classList.add('modal-open');
    }
    function closeModal() {
        document.body.classList.remove('modal-open');
    }

    function LoadStep(step) {
        isModalOverflowHidden = true;
        setTimeout(() => {
            isModalOverflowHidden = false;
        }, 400);
        stepCart = step;
    }

    let stepCart = 1;
    let isModalOverflowHidden = false;
</script>

<!-- Botão para abrir o carrinho -->
<button on:click={openModal} class="abrir btn"
    ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        ><path
            fill="currentColor"
            d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"
        /></svg
    >Meu Carrinho</button
>
<!-- MODAL: -->
<dialog id="meuCarrinho" class="modal">
    <div
        class="modal-box m-0 h-screen max-h-none w-full max-w-none rounded-none p-0"
        class:overflow-hidden={isModalOverflowHidden}
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
                        <form method="dialog" class="">
                            <!-- Fechar o modal (carrinho)-->
                            <button on:click={closeModal} class="fechar btn">Fechar</button>
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
                <StepWrapper stepCart="1" ID="etapa1" title="Meu carrinho:" {LoadStep}>
                    <s1_CartFlyout />
                </StepWrapper>
            {:else if stepCart === 2}
                <StepWrapper stepCart="2" ID="etapa2" title="Endereço de entrega:" {LoadStep}>
                    <s2_CheckoutForm />
                </StepWrapper>
            {:else if stepCart === 3}
                <StepWrapper stepCart="3" ID="etapa3" title="Resumo do pedido:" {LoadStep}>
                    <s3_CartSummary />
                </StepWrapper>
            {/if}
            <!--x-->
        </div>
    </div>
</dialog>
