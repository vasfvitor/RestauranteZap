<script>
    import CartFlyout from '@/components/SvelteCart/CartFlyout.svelte';
    import { CarregarEtapa } from '@/components/Cart/logic';
</script>

<section id="etapa1" class="container flex flex-col bg-blue-100">
    <div class="my-2 flex flex-col border-y-2 border-gray-200 py-2">
        1
        <CartFlyout />
    </div>
    <div class="flex justify-end gap-4">
        <button on:click={() => CarregarEtapa(2)} class="btn btn-primary">Continuar</button>
    </div>
</section>
