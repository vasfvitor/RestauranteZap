<script>
    import * as cart from '@/components/Cart/logic';
    import { CarregarEtapa } from '@/components/Cart/logic';
</script>

<section id="etapa3" class="hiddend flex border-y-2 flex-col py-2 my-2 border-gray-200">
    <div>3</div>
    <div class="flex gap-4 justify-end">
        <button on:click={() => CarregarEtapa(2)} class="btn mr-4">Voltar</button>
        <button class="btn-primary btn">Finalizar</button>
    </div>
</section>

