const open = document.getElementById("open-second");
const modal_container = document.getElementById("second-container");
const close = document.getElementById("close-second");
open.addEventListener("click", () => {
  modal_container.classList.add("show");
});
close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});