var symbols = document.querySelectorAll(".symbol");

var target = document.querySelector("html");
var saveButton = document.querySelector(".button2");
var downloadLink = document.querySelector(".download-link");

saveButton.addEventListener("click", function () {
  html2canvas(target).then((canvas) => {
    const base64image = canvas.toDataURL("image/png");

    downloadLink.setAttribute("download", "gravestone.png");
    downloadLink.setAttribute(
      "href",
      base64image.replace("image/png", "image/octet-stream")
    );
    downloadLink.click();
  });
});

Array.from(symbols)
  .forEach(function (symbol) {
    symbol.addEventListener("mousedown", function (event) {
      let shiftX = event.clientX - symbol.getBoundingClientRect().left;
      let shiftY = event.clientY - symbol.getBoundingClientRect().top;

      document.body.append(symbol);
      symbol.style.zIndex = 1000;

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        symbol.style.left =
          (pageX - shiftX) / ((10 * window.innerWidth) / 1440) + "rem";
        symbol.style.top =
          (pageY - shiftY) / ((10 * window.innerWidth) / 1440) + "rem";
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