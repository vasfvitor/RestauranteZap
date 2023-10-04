<script>
    import CartFlyout from '@/components/SvelteCart/CartFlyout.svelte';
    import { CarregarEtapa } from '@/components/Cart/logic';
</script>

<section id="etapa1" class="border-y-2 flex flex-col py-2 my-2 border-gray-200">
    <div>
        <CartFlyout />
    </div>
    <div class="flex gap-4 justify-end">
        <button on:click={() => CarregarEtapa(2)} class="btn btn-primary">Continuar</button>
    </div>
</section>
