



import $ from 'jquery';

class Modal {
  constructor(modalButton,modal,closeModal,cancelModal,className) {
    this.openModalButton = modalButton ;
    this.modal = modal;
    this.closeModalButton = closeModal;
    this.cancelModalButton = cancelModal;
    this.classname = className;
    this.events();
    console.log(this.openModalButton);
  }

  events() {
    // clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this));

    // clicking the x close modal button
    this.closeModalButton.click(this.closeModal.bind(this));

    // clicking the cancel button to close modal button
    this.cancelModalButton.click(this.closeModal.bind(this));

    // pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass(this.classname+"--is-visible");
    return false;
  }

  closeModal() {
    this.modal.removeClass(this.classname+"--is-visible");
    return false;
  }
}

export default Modal;
