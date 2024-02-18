const open = document.getElementById("open-third");
const modal_container = document.getElementById("modal-container-third");
const close = document.getElementById("close-third");
open.addEventListener("click", () => {
  modal_container.classList.add("show");
});
close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});