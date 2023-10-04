<script>
    import CheckoutForm from '@/components/Cart/CheckoutForm.svelte';
    import { CarregarEtapa } from '@/components/Cart/logic';
</script>

<section id="etapa2" class="hidden flex flex-col container bg-blue-100">
    <div class="border-y-2 py-2 my-2 border-gray-200">
        <div class="my-8 prose max-w-none">
            <h2>Endereço de entrega:</h2>

            <CheckoutForm />
        </div>
    </div>
    <div class="inline-flex gap-4 justify-end">
        <button on:click={() => CarregarEtapa(1)} class="btn">Voltar</button>
        <button on:click={() => CarregarEtapa(3)} class="btn-primary btn">Revisar pedido</button>
    </div>
</section>
