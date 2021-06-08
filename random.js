
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
  { imgPath: "grave1.png", text: "Несчастный случай" },
  { imgPath: "grave2.png", text: "Суицид" },
  { imgPath: "grave3.png", text: "Убийство" },
  { imgPath: "grave4.png", text: "Старость" },
  { imgPath: "grave5.png", text: "Болезнь" },
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


var placeOfDeathRow = document.querySelector(".place-of-death-row");
var targetGrave = document.querySelector(".big-grave");
var targetPlace = document.querySelector(".big-place");

var placesOfDeath = [
  { imgPath: "place.png", text: "Южная Америка" },
  { imgPath: "place2.png", text: "Северная Америка" },
  { imgPath: "place3.png", text: "Африка" },
  { imgPath: "place4.png", text: "Австралия" },
  { imgPath: "place5.png", text: "Антарктида" },
  { imgPath: "place6.png", text: "Евразия" },
];

placesOfDeath.forEach(function (placeOfDeath) {
  var column = document.createElement("div");
  column.classList.add("column");

  var img = document.createElement("img");
  img.classList.add("place-img");
  img.src = placeOfDeath.imgPath;
  img.addEventListener("click", function () {
    console.log("click");
    targetPlace.src = placeOfDeath.imgPath;
  });

  var columnText = document.createElement("div");
  columnText.innerHTML = placeOfDeath.text;
  columnText.classList.add("column-text");

  column.appendChild(img);
  column.appendChild(columnText);
  placeOfDeathRow.appendChild(column);
});