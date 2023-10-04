<script>
    import CheckoutForm from '@/components/Cart/CheckoutForm.svelte';
    import { CarregarEtapa } from '@/components/Cart/logic';
</script>

<section id="etapa2" class="container flex hidden flex-col bg-blue-100">
    <div class="my-2 border-y-2 border-gray-200 py-2">
        <div class="prose my-8 max-w-none">
            <h2>Endereço de entrega:</h2>

            <CheckoutForm />
        </div>
    </div>
    <div class="inline-flex justify-end gap-4">
        <button on:click={() => CarregarEtapa(1)} class="btn">Voltar</button>
        <button on:click={() => CarregarEtapa(3)} class="btn btn-primary">Revisar pedido</button>
    </div>
</section>
