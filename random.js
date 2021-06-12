function showTombstones() {
  for (let index = 0; index < 10; index++) {
    var x = Math.floor(Math.random() * 6 + 1);
    console.log(x);
    document.getElementById("divImage").innerHTML += `
       <img src="images/g${x}.png" style="width:100px;" >
   `;
  }
}

var symbols = [
  {
    imgPath: "6.svg", text: "Знания", },
  {
    imgPath: "47.svg", text: "Победы", },
  {
    imgPath: "8.svg", text: "Дом", },
  {
    imgPath: "9.svg", text: "Дружелюбный", }, 
  {
    imgPath: "10.svg", text: "Одиночка", },
  {
    imgPath: "11.svg", text: "Адаптивный", },
  {
    imgPath: "12.svg", text: "Спокойствия", },
  {
    imgPath: "13.svg", text: "Процветания", }, 
  {
    imgPath: "14.svg", text: "Заботливый", },
  {
    imgPath: "15.svg", text: "Вдумчивый", },
  {
    imgPath: "16.svg", text: "Вечной памяти", },
  {
    imgPath: "17.svg", text: "Прощения", }, 
  {
    imgPath: "18.svg", text: "Вечности", },
  {
    imgPath: "19.svg", text: "Радости", },
  {
    imgPath: "20.svg", text: "Хорошей жизни", },
  {
    imgPath: "21.svg", text: "Целеустремленный", }, 
  {
    imgPath: "22.svg", text: "Душа компании", },
  {
    imgPath: "23.svg", text: "Веселье", },
  {
    imgPath: "24.svg", text: "Воскрешения", },
  {
    imgPath: "25.svg", text: "Здоровья", }, 
  {
    imgPath: "26.svg", text: "Пессимист", },
  {
    imgPath: "27.svg", text: "Вдохновения", },
  {
    imgPath: "28.svg", text: "Риск", },
  {
    imgPath: "29.svg", text: "Стойкий", }, 
  {
    imgPath: "30.svg", text: "Соулмейт", },
  {
    imgPath: "31.svg", text: "Развитие", },
  {
    imgPath: "32.svg", text: "Семьянин", },
  {
    imgPath: "33.svg", text: "Дом", }, 
    {
    imgPath: "34.svg", text: "Уверенности", },
  {
    imgPath: "35.svg", text: "Гармонии", },
  {
    imgPath: "36.svg", text: "Светлое будущее", },
  {
    imgPath: "37.svg", text: "Самостоятельный", }, 
  {
    imgPath: "38.svg", text: "Смелый", },
  {
    imgPath: "39.svg", text: "Счастья", },
  {
    imgPath: "40.svg", text: "Новое начало", },
  {
    imgPath: "41.svg", text: "Стабильность", }, 
  {
    imgPath: "42.svg", text: "Приключения", },
  {
    imgPath: "43.svg", text: "Дружелюбный", },
  {
    imgPath: "44.svg", text: "Дети", },
  {
    imgPath: "45.svg", text: "Карьера", }, 
  {
    imgPath: "46.svg", text: "Внимательный", },
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