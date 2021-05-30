document.querySelectorAll(".symbols").forEach(function (symbols) {
    symbols.addEventListener("mousedown", function (e) {
        symbols.classList.add("is-dragged");
    });
});

window.addEventListener("mousemove", function (event) {
    var draggedElement = document.querySelector(".is-dragged");
    
    if (draggedElement) {
        var draggedElementRect = draggedElement.getBoundingClientRect();
        var translateX = event.clientX - draggedElementRect.width / 2;
        var translateY = event.clientX - draggedElementRect.height / 2;
        var translate = "translate(" + translateX + "px, " + translateY + "px)";
     draggedElement.style.transform = translate;
    }
});

window.addEventListener("mouseup", function () {
    document.querySelectorAll(".symbols").forEach(function (symbols) {
       symbols.classList.remove("is-dragged");
    });
});
