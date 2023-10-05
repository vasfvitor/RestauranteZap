<script>
    import CartFlyout from '@/components/SvelteCart/CartFlyout.svelte';
    import StepWrapper from './StepWrapper.svelte';
    import CheckoutForm from '@/components/Cart/CheckoutForm.svelte';
    import CartSummary from './CartSummary.svelte';

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
<button on:click={openModal} class="abrir btn">Meu Carrinho</button>
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
                    <CartFlyout />
                </StepWrapper>
            {:else if stepCart === 2}
                <StepWrapper stepCart="2" ID="etapa2" title="Endereço de entrega:" {LoadStep}>
                    <CheckoutForm />
                </StepWrapper>
            {:else if stepCart === 3}
                <StepWrapper stepCart="3" ID="etapa3" title="Resumo do pedido:" {LoadStep}>
                    <CartSummary />
                </StepWrapper>
            {/if}
            <!--x-->
        </div>
    </div>
</dialog>
