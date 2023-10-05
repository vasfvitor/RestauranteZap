<script>
    import CartPreview from '~/components/Cart/CartPreview.svelte';
    import { cartQuantity } from '~/components/Cart/cartStore';
    import Modal from '~/components/helper/Modal.svelte';
    import { quintOut } from 'svelte/easing';
    import { slide, fade } from 'svelte/transition';

    let showModal = false;

    let qty = 0;

    cartQuantity.subscribe((newQty) => {
        qty = newQty;
    });

    function lool() {
        showModal = false;
        console.log(showModal);
    }
</script>

{#if qty > 0}
    <div transition:fade={{ duration: 100 }} class="fixed bottom-8 right-8">
        <div class="indicator">
            <button class="btn btn-primary" on:click={() => (showModal = true)}>
                {#key qty}
                    <span
                        transition:slide={{ duration: 350, x: 0, y: 15, opacity: 0.3, easing: quintOut }}
                        class="indicator-bottom badge indicator-item badge-secondary indicator-start">{qty}</span
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
    </div>

    <Modal bind:showModal>
        <CartPreview />
    </Modal>
{:else}
    <div class="hidden" on:load={lool()}>x</div>
{/if}
