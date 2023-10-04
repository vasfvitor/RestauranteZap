<script>
    import CartFlyout from '@/components/SvelteCart/CartFlyout.svelte';
    import { CarregarEtapa } from '@/components/Cart/logic';
</script>

<section id="etapa1" class="container flex flex-col bg-blue-100">
    <div class="border-y-2 flex flex-col py-2 my-2 border-gray-200">
        1
        <CartFlyout />
    </div>
    <div class="flex gap-4 justify-end">
        <button on:click={() => CarregarEtapa(2)} class="btn btn-primary">Continuar</button>
    </div>
</section>
