<script>
    import Step1 from '~/components/Cart/Step1.svelte';
    import Step2 from '~/components/Cart/Step2.svelte';
    import Step3 from '~/components/Cart/Step3.svelte';

    import { openModal, closeModal } from '@/components/Cart/logic';
    // seleciona todos os botões com a classe abrir
    import { onMount } from 'svelte';

    onMount(() => {
        const btnAbrirModal = document.querySelectorAll('button.abrir');
        btnAbrirModal.forEach((button) => {
            button.addEventListener('click', () => {
                openModal();
            });
        });
        // seleciona todos os botões com a classe fechar
        const btnFecharModal = document.querySelectorAll('button.fechar');
        btnFecharModal.forEach((button) => {
            button.addEventListener('click', () => {
                closeModal();
            });
        });
    });

    let step = 1;
</script>

<!-- Botão para abrir o carrinho -->
<button class="abrir btn">Meu Carrinho</button>
<!-- MODAL: -->
<dialog id="meuCarrinho" class="modal">
    <div class="modal-box m-0 h-screen max-h-none w-full max-w-none rounded-none p-0">
        <div class="container py-8">
            <!-- Cabeçalho do carrinho onde mostra os passos e o botão de fechar -->
            <div>
                <div class="flex flex-col-reverse text-center md:flex-row md:justify-between">
                    <ul class="steps">
                        <!-- Passos step-primary -->
                        <li id="passo1" class="step step-primary"></li>
                        <li id="passo2" class="step"></li>
                        <li id="passo3" class="step"></li>
                    </ul>
                    <div class="mx-auto mb-8 md:m-0">
                        <form method="dialog" class="">
                            <!-- Fechar o modal (carrinho)-->
                            <button class="fechar btn">Fechar</button>
                        </form>
                        <!-- Fechar com botão ESC -->
                        <form method="dialog" class="modal-backdrop">
                            <button>close</button>
                        </form>
                    </div>
                </div>
                <h3 class="prose font-black md:prose-lg">Seu carrinho:</h3>
            </div>
            <!--x-->
            <!-- Corpo do Modal que será ativado de acordo com o script abaixo -->
           
            <Step1 />
            <Step2 />
            <Step3 />
            <!--x-->
        </div>
    </div>
</dialog>
