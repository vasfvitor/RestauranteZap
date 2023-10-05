// Função chamada nos componentes Step*.svelte
/*
export function CarregarEtapa(proxEtapa: number) {
    for (let i = 1; i <= 3; i++) {
        // Ativa o layout da etapa 1, 2 e 3
        const etapaCarrinho = document.getElementById(`etapa${i}`) as HTMLDivElement;
        // Verifica se é a etapa atual
        if (i === proxEtapa) {
            etapaCarrinho.classList.remove('hidden');
            etapaCarrinho.classList.add('flex');
        } else {
            etapaCarrinho.classList.remove('flex');
            etapaCarrinho.classList.add('hidden');
        }
        // Seta indicador de etapa 1, 2 e 3
        const passoIndicador = document.getElementById(`passo${i}`) as HTMLElement;
        // Verifica se é a etapa atual ou anterior
        if (i <= proxEtapa) {
            passoIndicador.classList.add('step-primary');
        } else {
            passoIndicador.classList.remove('step-primary');
        }
    }
}*/

// Script pra fechar e abrir o modal, e remover o scroll do body
export function openModal() {
    const meuCarrinho = document.getElementById('meuCarrinho');
    meuCarrinho.showModal();
    document.body.classList.add('modal-open');
}
export function closeModal() {
    //const meuCarrinho = document.getElementById('meuCarrinho');
    document.body.classList.remove('modal-open');
}
