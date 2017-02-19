(function modal() {
  // Get the modal
  var modal = document.querySelector('.modal-writeus');
  // Get the button that opens the modal
  var btn = document.querySelector('.map-adress .btn');
  // Get the element that closes the modal
  var close = document.querySelector('.modal-writeus .exit');
  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  }
  // When the user clicks on (x), close the modal
  close.onclick = function () {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
})();

(function modalTabCycle() {
  var lastEl = document.querySelector('.modal-btn');
  var firstEl = document.querySelector('.modal-content  input');
  // таб на кнопке отправляет на первый инпут
  lastEl.onkeydown = function (event) {
    if (!(event.shiftKey) && event.keyCode === 9) {
      firstEl.focus();
      event.preventDefault();
      event.stopPropagation();
    }
  };
  // шифт таб на первом инпуте отправляет на кнопку
  firstEl.onkeydown = function (event) {
    if (event.shiftKey && event.keyCode === 9) {
      lastEl.focus();
      event.preventDefault();
      event.stopPropagation();
    }
  };
}());