let inputWord;
let currentWord;
let message;
let figure;
let data = [];
let currentText;
let inputText;
let currentClothesPart;
let count = 0;
let messageText;
let titleText;

function preload() {
  data = loadJSON("data.json");
}

function setup() {
  noCanvas();
  var lang = navigator.language || "en-US";
  var myRec = new p5.SpeechRec(lang, parseResult); // new P5.SpeechRec object
  myRec.continuous = true; // do continuous recognition
  myRec.interimResults = true; // allow partial recognition (faster, less accurate)

  var resultArray = Object.keys(data).map(function (key) {
    return data[key];
  });

  function parseResult() {
    inputWord = myRec.resultString;
    recogniseWord(resultArray);
  }
  myRec.start(); // start engine
  message = "Read the word above loudly";
}

function draw() {
  noLoop();
  //Set elements to DOM
  messageText = createElement("p").position(400, 920);
  titleText = createElement(
    "h4",
    "Read below word loudly untill you do it right to undress this handsome policeman:"
  ).position(400, 10);
  inputText = createElement("h2");
  inputText.html("Holy shit!").position(400, 40);
  figure = createElement("div")
    .class("human")
    .attribute("height", "730px")
    .position(195, 100);
  figure.attribute("position", "relative");
  let body = createImg("/assets/body.png")
    .id("body")
    .class("clothes")
    .position(195, 46)
    .attribute("height", "750px");
  let hat = createImg("/assets/hat.png")
    .id("hat")
    .class("clothes")
    .position(304, 40)
    .attribute("height", "60px");
  let sunglasses = createImg("/assets/sunglasses.png")
    .id("sunglasses")
    .class("clothes")
    .position(323, 105)
    .attribute("height", "25px");
  let shirt = createImg("/assets/shirt.png")
    .id("shirt")
    .class("clothes")
    .position(242, 150)
    .attribute("height", "210px");

  let trousers = createImg("/assets/trousers.png")
    .id("trousers")
    .class("clothes")
    .position(265, 340)
    .attribute("height", "370px");

  let panties = createImg("/assets/panties.png")
    .id("panties")
    .class("clothes")
    .position(285, 410)
    .attribute("height", "75px");

  figure.child(body);
  figure.child(hat);
  figure.child(panties);
  figure.child(sunglasses);
  figure.child(shirt);
  figure.child(trousers);
  const clothes = document.getElementsByClassName("clothes");
  for (let i = 0; i <= clothes.length - 1; i++) {
    clothes[i].style.position = "absolute";
  }
}

function recogniseWord(resultArray) {
  const clothesPart = document.getElementById(currentClothesPart);
  console.log(count);
  currentWord = resultArray[count];
  currentWordName = currentWord.name;
  currentWordText = currentWord.word;
  currentClothesPart = currentWord.clothes;

  console.log(inputWord);
  console.log(currentWordName);
  console.log(currentWordText);

  if (inputWord === currentWordName) {
    if (count !== resultArray.length) {
      messageText.html("Congrats!");
      inputText.html(currentWordText);
      clothesPart.style.display = "none";
      count++;
    } else {
      messageText.html("Yay! You made a policeman naked!!", true);
    }
  } else {
    messageText.html("You can do it better! Try again");
    inputText.html(currentWordText);
  }
}
