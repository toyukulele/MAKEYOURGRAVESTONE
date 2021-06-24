function showTombstones() {
  for (let index = 0; index < 10; index++) {
    var x = Math.floor(Math.random() * 6 + 1);
    console.log(x);
    document.getElementById("divImage").innerHTML += `
       <img src="images/g${x}.svg" style="width:150px;" >
   `;
  }
}

var symbols = [
  {
    imgPath: "6.png",
    text: "Знания",
  },
  {
    imgPath: "77.png",
    text: "Победы",
  },
  {
    imgPath: "8.png",
    text: "Дом",
  },
  {
    imgPath: "9.png",
    text: "Дружелюбный",
  },
  {
    imgPath: "10.png",
    text: "Одиночка",
  },
  {
    imgPath: "11.png",
    text: "Адаптивный",
  },
  {
    imgPath: "12.png",
    text: "Спокойствия",
  },
  {
    imgPath: "13.png",
    text: "Процветания",
  },
  {
    imgPath: "14.png",
    text: "Заботливый",
  },
  {
    imgPath: "15.png",
    text: "Вдумчивый",
  },
  {
    imgPath: "16.png",
    text: "Вечной памяти",
  },
  {
    imgPath: "17.png",
    text: "Прощения",
  },
  {
    imgPath: "18.png",
    text: "Вечности",
  },
  {
    imgPath: "19.png",
    text: "Радости",
  },
  {
    imgPath: "20.png",
    text: "Хорошей жизни",
  },
  {
    imgPath: "21.png",
    text: "Целеустремленный",
  },
  {
    imgPath: "22.png",
    text: "Душа компании",
  },
  {
    imgPath: "23.png",
    text: "Веселье",
  },
  {
    imgPath: "24.png",
    text: "Воскрешения",
  },
  {
    imgPath: "25.png",
    text: "Здоровья",
  },
  {
    imgPath: "26.png",
    text: "Пессимист",
  },
  {
    imgPath: "27.png",
    text: "Вдохновения",
  },
  {
    imgPath: "28.png",
    text: "Риск",
  },
  {
    imgPath: "29.png",
    text: "Стойкий",
  },
  {
    imgPath: "30.png",
    text: "Соулмейт",
  },
  {
    imgPath: "31.png",
    text: "Развитие",
  },
  {
    imgPath: "32.png",
    text: "Семьянин",
  },
  {
    imgPath: "34.png",
    text: "Уверенности",
  },
  {
    imgPath: "35.png",
    text: "Гармонии",
  },
  {
    imgPath: "36.png",
    text: "Светлое будущее",
  },
  {
    imgPath: "37.png",
    text: "Самостоятельный",
  },
  {
    imgPath: "38.png",
    text: "Смелый",
  },
  {
    imgPath: "39.png",
    text: "Счастья",
  },
  {
    imgPath: "40.png",
    text: "Новое начало",
  },
  {
    imgPath: "41.png",
    text: "Стабильность",
  },
  {
    imgPath: "42.png",
    text: "Приключения",
  },
  {
    imgPath: "43.png",
    text: "Дружелюбный",
  },
  {
    imgPath: "44.png",
    text: "Дети",
  },
  {
    imgPath: "45.png",
    text: "Карьера",
  },
  {
    imgPath: "46.png",
    text: "Внимательный",
  },
];

var symbolsBox = document.querySelector(".symbols");
symbols.forEach(function (symbol, index) {
  const symbolEl = document.createElement("div");
  symbolEl.classList.add("symbol", "symbols-" + (index + 1));

  var img = document.createElement("img");
  img.src = symbol.imgPath;

  var symbolText = document.createElement("div");
  symbolText.innerHTML = symbol.text;
  symbolText.classList.add("symbol-text");

  symbolEl.appendChild(img);
  symbolEl.appendChild(symbolText);
  symbolsBox.appendChild(symbolEl);
});

function updateActiveItem(activeItem, items) {
  items.forEach(function (item) {
    item.style.transform = activeItem === item ? "scale(0.8,0.8)" : "none";
  });
}

var randomButton = document.querySelector(".button");
randomButton.addEventListener("click", showTombstones);

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
    updateActiveItem(img, document.querySelectorAll(".grave-img"));
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
    updateActiveItem(img, document.querySelectorAll(".place-img"));
    targetPlace.src = placeOfDeath.imgPath;
  });

  var columnText = document.createElement("div");
  columnText.innerHTML = placeOfDeath.text;
  columnText.classList.add("column-text");

  column.appendChild(img);
  column.appendChild(columnText);
  placeOfDeathRow.appendChild(column);
});
