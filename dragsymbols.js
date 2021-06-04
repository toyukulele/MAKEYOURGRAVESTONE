var symbols = document.querySelectorAll(".symbol");

symbols.forEach(function (symbol) {
  symbol.addEventListener("mousedown", function (e) {
    symbol.classList.add("is-dragged");
  });
});

window.addEventListener("mouseup", function () {
  symbols.forEach(function (symbol) {
    symbol.classList.remove("is-dragged");
  });
});

window.addEventListener("mousemove", function (event) {
  var draggedElement = document.querySelector(".is-dragged");

  if (draggedElement) {
    var draggedElementRect = draggedElement.getBoundingClientRect();
    var translateX =
      event.clientX - draggedElementRect.left + draggedElementRect.width / 2;
    var translateY =
      event.clientY - draggedElementRect.top + draggedElementRect.height / 2;
    console.log(translateX, translateY);
    var translate = "translate(" + translateX + "px, " + translateY + "px)";
    draggedElement.style.transform = translate;
  }
});