

const screenshotTarget = document.body;

html2canvas(screenshotTarget).then((canvas) => {
    const base64image = canvas.toDataURL("image/png");
    window.location.href = base64image;
});


var symbols = document.querySelectorAll(".symbol");

symbols.forEach(function (symbol) {
  symbol.addEventListener("mousedown", function (event) {
    let shiftX = event.clientX - symbol.getBoundingClientRect().left;
    let shiftY = event.clientY - symbol.getBoundingClientRect().top;

    document.body.append(symbol);
    symbol.style.zIndex = 1000;

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      symbol.style.left = pageX - shiftX + "px";
      symbol.style.top = pageY - shiftY + "px";
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener("mousemove", onMouseMove);

    symbol.onmouseup = function () {
      document.removeEventListener("mousemove", onMouseMove);
      symbol.onmouseup = null;
    };
    symbol.ondragstart = function () {
      return false;
    };
  });
});

window.addEventListener("mouseup", function () {
  symbols.forEach(function (symbol) {
    symbol.classList.remove("is-dragged");
  });
});

window.addEventListener("mousemove", function (event) {});

