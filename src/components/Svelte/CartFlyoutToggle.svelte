<script>
    import { isCartOpen, calculateTotalPrice } from '~/components/Svelte/cartStore';
</script>

<!--use "$" to read the store value-->
<button
    class="btn btn-primary"
    on:click={() => {
        isCartOpen.set(!$isCartOpen);
        calculateTotalPrice();
    }}>Meu Carrinho</button
>
