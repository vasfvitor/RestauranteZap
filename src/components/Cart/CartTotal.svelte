<script>
    import { cartSubTotal } from '~/components/SvelteCart/cartStore';
</script>

<div class="font-base my-4 self-end text-gray-800">
    <p>Subtotal: R${$cartSubTotal}</p>
    <p class="text-gray-300">Entrega : R$3</p>
    <p class="text-lg font-normal">
        Total: <span class="font-bold text-yellow-500">R${Number($cartSubTotal) + 3}</span>
    </p>
</div>
