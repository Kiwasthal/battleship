export default {
  animateShelf() {
    {
      if (
        document.querySelector('.open-drawer').classList.contains('slide-open')
      ) {
        document.querySelector('.open-drawer').classList.remove('slide-open');
        document.querySelector('.shelf').classList.remove('shelf-slide-open');
      } else {
        document.querySelector('.open-drawer').classList.add('slide-open');
        document.querySelector('.shelf').classList.add('shelf-slide-open');
      }
    }
  },
};
