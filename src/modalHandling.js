export default {
  getModal() {
    return document.querySelector('.modal');
  },
  showModal() {
    this.getModal().showModal();
  },
  closeModal() {
    this.getModal().close();
  },
  getModalHeader() {
    return document.querySelector('.winnerMsg');
  },
  displayWinnerMessage() {
    this.getModalHeader().textContent = 'Congratulations Captain';
  },
  displayLooserMessage() {
    this.getModalHeader().textContent = 'Better luck next time Captain';
  },
  displayWinningModal() {
    this.showModal();
    this.displayWinnerMessage();
  },
  displayLoosingModal() {
    this.showModal();
    this.displayLooserMessage();
  },
};
