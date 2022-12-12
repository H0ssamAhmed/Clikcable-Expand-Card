let expand = document.querySelectorAll(".panel");
expand.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    removeActvieClass();
    e.target.classList.add("active");
  });
});
function removeActvieClass() {
  expand.forEach((e) => {
    e.classList.remove("active");
  });
}
