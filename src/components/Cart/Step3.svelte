<script>
    // import * as cart from '@/components/Cart/logic';
    import { CarregarEtapa } from '@/components/Cart/logic';
</script>

<section id="etapa3" class="hidden flex flex-col container bg-blue-100">
    <div class="border-y-2 flex flex-col py-2 my-2 border-gray-200">
        <div>3</div>
    </div>
    <div class="flex gap-4 justify-end">
        <button on:click={() => CarregarEtapa(2)} class="btn">Voltar</button>
        <button class="btn-primary btn">Finalizar</button>
    </div>
</section>
