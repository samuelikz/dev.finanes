let Modal = {
    open(){
        //abrir modal, adicionar a class active ao modal
        document
        .querySelector('.modal-overlay')
        .classList.add('active')
    },
    close(){
        //fechar modal, remover a class active do modal
        document
        .querySelector('.modal-overlay')
        .classList
        .remove('active')

    }
}