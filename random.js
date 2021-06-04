
function generator() {
  for (let index = 0; index < 10; index++) {
    var x = Math.floor(Math.random() * 6 + 1);
    console.log(x);
    document.getElementById("divImage").innerHTML += `
       <img src="images/g${x}.png" style="width:100px;" >
   `;
  }
}

var causeOfDeathRow = document.querySelector(".cause-of-death-row");
var targetGrave = document.querySelector(".big-grave");
var targetPlace = document.querySelector(".big-place");

var causesOfDeath = [
  { imgPath: "grave1.svg", text: "Несчастный случай" },
  { imgPath: "grave2.svg", text: "Суицид" },
  { imgPath: "grave3.svg", text: "Убийство" },
  { imgPath: "grave4.svg", text: "Старость" },
  { imgPath: "grave5.svg", text: "Болезнь" },
];

causesOfDeath.forEach(function (causeOfDeath) {
  var column = document.createElement("div");
  column.classList.add("column");

  var img = document.createElement("img");
  img.classList.add("grave-img");
  img.src = causeOfDeath.imgPath;
  img.addEventListener("click", function () {
    console.log("click");
    targetGrave.src = causeOfDeath.imgPath;
  });

  var columnText = document.createElement("div");
  columnText.innerHTML = causeOfDeath.text;
  columnText.classList.add("column-text");

  column.appendChild(img);
  column.appendChild(columnText);
  causeOfDeathRow.appendChild(column);
});