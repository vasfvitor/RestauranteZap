<script>
    // import * as cart from '@/components/Cart/logic';
    import { CarregarEtapa } from '@/components/Cart/logic';
</script>

<section id="etapa3" class="container flex hidden flex-col bg-blue-100">
    <div class="my-2 flex flex-col border-y-2 border-gray-200 py-2">
        <div>3</div>
    </div>
    <div class="flex justify-end gap-4">
        <button on:click={() => CarregarEtapa(2)} class="btn">Voltar</button>
        <button class="btn btn-primary">Finalizar</button>
    </div>
</section>
