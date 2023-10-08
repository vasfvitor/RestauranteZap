<script>
    import Modal from '~/components/helper/Modal.svelte';
    let showModal = false;

    // COMPONENTS
    import StepWrapper from '~/components/Cart/Steps/StepWrapper.svelte';

    import S1CartFlyout from '~/components/Cart/Steps/S1CartFlyout.svelte';
    import S2CheckoutForm from '~/components/Cart/Steps/S2CheckoutForm.svelte';
    import S3CartSummary from '~/components/Cart/Steps/S3CartSummary.svelte';

    import CartTotal from '~/components/Cart/CartTotal.svelte';

    // DATA
    import { cartQuantity } from '~/components/Cart/cartStore';
    import { cartItems } from '~/components/Cart/cartStore';
    import { DADOS } from '~/utils/consts';

    // SVELTE
    import { fade } from 'svelte/transition';

    let stepCart = 1;

    let qty = 0;

    cartQuantity.subscribe((newQty) => {
        qty = newQty;
    });

    let isOverflowHidden = false;
    function LoadStep(step) {
        isOverflowHidden = true;
        setTimeout(() => {
            isOverflowHidden = false;
        }, 800);
        stepCart = step;
    }

    function GetOrder() {
        const currItem = cartItems.get();
        let order = '';
        for (const key in currItem) {
            if (currItem.hasOwnProperty(key)) {
                const cartItem = currItem[key];
                const quantity = cartItem.quantity;
                if (quantity > 0) {
                    const itemName = cartItem.name;
                    order = order + `${itemName} x ${quantity} \n`;
                }
            }
        }
        return order;
    }

    let formData = {
        CEP: '',
        Endereco: '',
        Bairro: '',
        Cidade: '',
        Numero: '',
        Complemento: '',
    };

    function GetAddress() {
        const text = `CEP: ${formData.CEP} \nEndereço: ${formData.Endereco}, ${formData.Numero}. ${formData.Bairro} - ${formData.Cidade}\n${formData.Complemento}`;
        //console.log(text);
        return text;
    }

    function Checkout() {
        const order = GetOrder();
        const address = GetAddress();
        const total = '';
        const message = `Olá, meu pedido é: \n${order}\n${address}\nTotal: ${total}`;
        const waLink = `https\://wa.me/55${DADOS.telefone.text}/?text=${message}`;
        const encoded = encodeURI(waLink);
        window.location.href = encoded;
    }
</script>

<!-- Botão para abrir o carrinho -->
<div transition:fade={{ duration: 100 }} class="indicator">
    <button class="btn" on:click={() => (showModal = true)}>
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
<Modal isFullScreen={true} bind:showModal id="modal_cart">
    <div class="container h-screen bg-white py-8">
        <!-- Cabeçalho do carrinho onde mostra os passos e o botão de fechar -->
        <div class="flex flex-col-reverse text-center md:flex-row md:justify-between">
            <ul class="steps">
                <!-- Passos step-primary -->
                <li id="passo1" class="step step-primary"></li>
                <li id="passo2" class="step" class:step-primary={stepCart == 2 || stepCart == 3}></li>
                <li id="passo3" class="step" class:step-primary={stepCart == 3}></li>
            </ul>
        </div>

        {#if stepCart === 1}
            <StepWrapper ID="etapa1" title="Meu carrinho:">
                <S1CartFlyout />
                <CartTotal />
                <div class="flex justify-end gap-4">
                    <button on:click={() => LoadStep(2)} class="btn btn-primary">Continuar</button>
                </div>
            </StepWrapper>
        {:else if stepCart === 2}
            <StepWrapper ID="etapa2" title="Endereço de entrega:">
                <S2CheckoutForm {GetAddress} {formData} />
                <CartTotal />
                <div class="flex justify-end gap-4">
                    <button on:click={() => LoadStep(1)} class="btn">Voltar</button>
                    <button on:click={() => LoadStep(3)} class="btn btn-primary">Revisar pedido</button>
                </div>
            </StepWrapper>
        {:else if stepCart === 3}
            <StepWrapper ID="etapa3" title="Resumo do pedido:" {Checkout}>
                <S3CartSummary />
                <CartTotal />
                <div class="flex justify-end gap-4">
                    <button on:click={() => LoadStep(2)} class="btn">Voltar</button>
                    <button on:click={() => Checkout()} class="btn btn-primary">Finalizar</button>
                </div>
            </StepWrapper>
        {/if}
    </div>
</Modal>
