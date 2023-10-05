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
