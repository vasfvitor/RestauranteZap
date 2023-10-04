<script>
    import CheckoutForm from '@/components/Cart/CheckoutForm.svelte';
    import { CarregarEtapa } from '@/components/Cart/logic';
</script>

<section id="etapa2" class="hiddedn flex border-y-2 flex-col py-2 my-2 border-gray-200">
    <h2>Endereço de entrega:</h2>
    <CheckoutForm />
    <div class="flex gap-4 justify-end">
        <button on:click={CarregarEtapa(1)} class="btn mr-4">Voltar</button>
        <button on:click={CarregarEtapa(3)} class="btn-primary btn">Revisar pedido</button>
    </div>
</section>
