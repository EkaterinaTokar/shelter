/*Screen size */
function windowsize() {
  petsWrapper.style.cssText = "";
  let windowWidth = window.innerWidth; ///window.screen.width;
  if (windowWidth > 1280) {
    petsWrapper.style.cssText = `max-width: 1100px;`;
  } else if (windowWidth <= 1279 && windowWidth > 767) {
    petsWrapper.style.cssText = `max-width: 600px;
     margin: 0 10px 0 10px`;
  } else if (windowWidth <= 767) {
    petsWrapper.style.cssText = `max-width: 270px`;
  }
}

/*burger */
let burger = document.querySelector(".header__burger");
let headerNav = document.querySelector(".header__navigation");
let headerBurger = document.querySelector(".header__burger");
let headerLogo = document.querySelector(".header__logo");
let headerWrapper = document.querySelector(".header__wrapper");
let wrapperBackground = document.querySelector(".wrapper-background");

burger.addEventListener("click", (event) => {
  event.preventDefault();
  headerNav.classList.toggle("active");
  burger.classList.toggle("close");
  headerLogo.classList.toggle("change");
  headerWrapper.classList.toggle("changeLogo");
  if (headerBurger.classList.contains("close")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

wrapperBackground.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("not-only__wrapper") ||
    event.target.classList.contains("header__wrapper") ||
    event.target.classList.contains("not-only__sub-heading") ||
    event.target.classList.contains("not-only__heading")
  ) {
    headerNav.classList.remove("active");
    burger.classList.remove("close");
    headerLogo.classList.remove("change");
    headerWrapper.classList.remove("changeLogo");
    document.body.style.overflow = "";
  }
});

let navigationItem = document.querySelectorAll(".navigation__item");
navigationItem.forEach((el) => {
  el.addEventListener("click", () => {
    headerNav.classList.remove("active");
    burger.classList.remove("close");
    headerLogo.classList.remove("change");
    headerWrapper.classList.remove("changeLogo");
    document.body.style.overflow = "";
  });
});

/*Popup */
let modalWrapper = document.querySelector(".modal__wrapper");
function learnMore(event) {
  event.preventDefault();
  let petsCard = event.target.closest(".pets__card");
  if (petsCard) {
    modalWrapper = petsCard.querySelector(".modal__wrapper");
    modalWrapper.classList.add("open__popup");
    document.body.style.overflow = "hidden";

    let closePopup = document.querySelectorAll(".button__modal-close");
    modalWrapper.addEventListener("click", (event) => {
      if (event.target.contains(modalWrapper)) {
        modalWrapper.classList.remove("open__popup");
        document.body.style.overflow = "";
      }
    });

    closePopup.forEach((el) => {
      el.addEventListener("click", (event) => {
        let modal = event.target.closest(".modal__wrapper");
        modal.classList.remove("open__popup");
        document.body.style.overflow = "";
      });
    });
  }
}

/*Carousel*/
let buttonArrowRight = document.querySelector(".button-arrow_right");
let buttonArrowLeft = document.querySelector(".button-arrow_left");
let petsWrapper = document.querySelector(".pets__wrapper");

let petsLeft = document.getElementById("pets_left");
let petsCenter = document.getElementById("pets_center");
let petsRight = document.getElementById("pets_right");

function createPetsCard() {
  let div = document.createElement("div");
  div.classList = "pets__card";
  return div;
}

let currentCard1;
let currentCard2;
let currentCard3;

let rightInd1;
let rightInd2;
let rightInd3;

let leftInd1;
let leftInd2;
let leftInd3;

let map = new Map();
map.set("Jenifer", 0);
map.set("Sophia", 1);
map.set("Woody", 2);
map.set("Scarlet", 3);
map.set("Katrine", 4);
map.set("Timmy", 5);
map.set("Freddy", 6);
map.set("Charly", 7);

function random() {
  let nameArr = [
    "Jenifer",
    "Sophia",
    "Woody",
    "Scarlet",
    "Katrine",
    "Timmy",
    "Freddy",
    "Charly",
  ];
  let randomPets = nameArr
    .map((i) => [Math.random(), i])
    .sort()
    .map((i) => i[1]);
  return randomPets;
}

let randomName;
function centerIndex() {
  windowsize();
  let centerIndArr = [];
  randomName = random();
  while (true) {
    currentCard1 = map.get(randomName[Math.floor(Math.random() * 8)]);
    if (currentCard1 != currentCard2 && currentCard1 != currentCard3) {
      break;
    }
  }
  while (true) {
    currentCard2 = map.get(randomName[Math.floor(Math.random() * 8)]);
    if (currentCard2 != currentCard1 && currentCard2 != currentCard3) {
      break;
    }
  }
  while (true) {
    currentCard3 = map.get(randomName[Math.floor(Math.random() * 8)]);
    if (currentCard3 != currentCard1 && currentCard3 != currentCard2) {
      break;
    }
  }
  centerIndArr.push(currentCard1);
  centerIndArr.push(currentCard2);
  centerIndArr.push(currentCard3);
  return centerIndArr;
}

let randomIndexArr;
function randomIndArrRight() {
  windowsize();
  randomIndexArr = [];
  randomName = random();
  while (true) {
    rightInd1 = map.get(randomName[Math.floor(Math.random() * 8)]);
    if (
      rightInd1 != currentCard1 &&
      rightInd1 != currentCard2 &&
      rightInd1 != currentCard3
    ) {
      break;
    }
  }
  while (true) {
    rightInd2 = map.get(randomName[Math.floor(Math.random() * 8)]);
    if (
      rightInd2 != currentCard1 &&
      rightInd2 != currentCard2 &&
      rightInd2 != currentCard3 &&
      rightInd2 != rightInd1
    ) {
      break;
    }
  }
  while (true) {
    rightInd3 = map.get(randomName[Math.floor(Math.random() * 8)]);
    if (
      rightInd3 != currentCard1 &&
      rightInd3 != currentCard2 &&
      rightInd3 != currentCard3 &&
      rightInd3 != rightInd1 &&
      rightInd3 != rightInd2
    ) {
      break;
    }
  }
  randomIndexArr.push(rightInd1);
  randomIndexArr.push(rightInd2);
  randomIndexArr.push(rightInd3);
  return randomIndexArr;
}
function randomIndArrLeft() {
  windowsize();
  randomIndexArr = [];
  randomName = random();
  while (true) {
    leftInd1 = map.get(randomName[Math.floor(Math.random() * 8)]);
    if (
      leftInd1 != currentCard1 &&
      leftInd1 != currentCard2 &&
      leftInd1 != currentCard3
    ) {
      break;
    }
  }
  while (true) {
    leftInd2 = map.get(randomName[Math.floor(Math.random() * 8)]);
    if (
      leftInd2 != currentCard1 &&
      leftInd2 != currentCard2 &&
      leftInd2 != currentCard3 &&
      leftInd2 != leftInd1
    ) {
      break;
    }
  }
  while (true) {
    leftInd3 = map.get(randomName[Math.floor(Math.random() * 8)]);
    if (
      leftInd3 != currentCard1 &&
      leftInd3 != currentCard2 &&
      leftInd3 != currentCard3 &&
      leftInd3 != leftInd1 &&
      leftInd3 != leftInd2
    ) {
      break;
    }
  }
  randomIndexArr.push(leftInd1);
  randomIndexArr.push(leftInd2);
  randomIndexArr.push(leftInd3);
  return randomIndexArr;
}

let arr;
function getData(arr) {
  let centerArrInd = centerIndex();
  for (let i = 0; i < 3; i++) {
    let div = createPetsCard();
    div.innerHTML = `
    <img class="pets__card-img"
      src="${arr[centerArrInd[i]].img}"
      alt="${arr[centerArrInd[i]].breed}"/>
    <span class="pets__name">${arr[centerArrInd[i]].name}</span>
    <button class="button button_border button__pets">
    Learn more
    </button>
    <div class = "modal__wrapper">
    <div class = "pets__modal_wrapper">
    <button class = "button__modal-close">
    <p class ="close__code">&#10006;</p></button>
     <div class = "pets__modal">
      <img class="pets__modal-img"
      src="${arr[centerArrInd[i]].img}"
      alt="${arr[centerArrInd[i]].breed}"/>
       <div class = "modal__content">
       <h3 class = "modal__pets_name">${arr[centerArrInd[i]].name}</h3>
       <h4 class ="modal__pets_type">${arr[centerArrInd[i]].type} - ${
      arr[centerArrInd[i]].breed
    }</h4>
       <p class ="modal__pets_desc">${arr[centerArrInd[i]].description}</p>
       <ul class ="modal__pets_items">
       <li class = "modal__item"><span class = "modal__text">Age:</span>${
         arr[centerArrInd[i]].age
       }</li>
       <li class = "modal__item"><span class = "modal__text">Inoculations:</span> ${
         arr[centerArrInd[i]].inoculations
       }</li>
       <li class = "modal__item"><span class = "modal__text">Diseases: </span>${
         arr[centerArrInd[i]].diseases
       }</li>
       <li class = "modal__item"><span class = "modal__text">Parasites: </span>${
         arr[centerArrInd[i]].parasites
       }</li>
       </ul>
       </div>
      </div>
      <div>
    </div>
  `;
    petsCenter.append(div);
    /*Popup */
    let buttonPets = document.querySelectorAll(".button__pets");
    buttonPets.forEach((el) => {
      el.addEventListener("click", learnMore);
    });

    /*mouse*/
    let buttonModal;
    function mouseLeave(event) {
      event.preventDefault();
      let buttonModalCloseActive = event.relatedTarget;
      if (buttonModalCloseActive) {
        console.log(buttonModalCloseActive);
        buttonModal = buttonModalCloseActive.querySelector(
          ".button__modal-close"
        );
        buttonModal.classList.add("hover");
      }
      let petsModalWrapper = event.target;
      petsModalWrapper.addEventListener("mouseover", function () {
        buttonModal = buttonModalCloseActive.querySelector(
          ".button__modal-close"
        );
        buttonModal.classList.remove("hover");
      });
    }
    let petsModalWrapper = document.querySelectorAll(".pets__modal_wrapper");
    petsModalWrapper.forEach((el) => {
      el.addEventListener("mouseleave", mouseLeave);
    });
  }

  let randomIndex;
  function rightCards() {
    randomIndex = randomIndArrRight();
    for (let i = 0; i < 3; i++) {
      let div = createPetsCard();
      div.innerHTML = `
    <img class="pets__card-img"
      src="${arr[randomIndex[i]].img}"
      alt="${arr[randomIndex[i]].breed}"/>
    <span class="pets__name">${arr[randomIndex[i]].name}</span>
    <button class="button button_border button__pets">
    Learn more
    </button>
    <div class = "modal__wrapper">
    <div class = "pets__modal_wrapper">
    <button class = "button__modal-close">
    <p class ="close__code">&#10006;</p></button>
     <div class = "pets__modal">
      <img class="pets__modal-img"
      src="${arr[randomIndex[i]].img}"
      alt="${arr[randomIndex[i]].breed}"/>
       <div class = "modal__content">
       <h3 class = "modal__pets_name">${arr[randomIndex[i]].name}</h3>
       <h4 class ="modal__pets_type">${arr[randomIndex[i]].type} - ${
        arr[randomIndex[i]].breed
      }</h4>
       <p class ="modal__pets_desc">${arr[randomIndex[i]].description}</p>
       <ul class ="modal__pets_items">
       <li class = "modal__item"><span class = "modal__text">Age:</span>${
         arr[randomIndex[i]].age
       }</li>
       <li class = "modal__item"><span class = "modal__text">Inoculations:</span> ${
         arr[randomIndex[i]].inoculations
       }</li>
       <li class = "modal__item"><span class = "modal__text">Diseases: </span>${
         arr[randomIndex[i]].diseases
       }</li>
       <li class = "modal__item"><span class = "modal__text">Parasites: </span>${
         arr[randomIndex[i]].parasites
       }</li>
       </ul>
       </div>
      </div>
      <div>
    </div>
  `;
      petsRight.append(div);
    }
    /*Popup */
    let buttonPets = document.querySelectorAll(".button__pets");
    buttonPets.forEach((el) => {
      el.addEventListener("click", learnMore);
    });

    /*mouse*/
    let buttonModal;
    function mouseLeave(event) {
      event.preventDefault();
      let buttonModalCloseActive = event.relatedTarget;
      if (buttonModalCloseActive) {
        console.log(buttonModalCloseActive);
        buttonModal = buttonModalCloseActive.querySelector(
          ".button__modal-close"
        );
        buttonModal.classList.add("hover");
      }
      let petsModalWrapper = event.target;
      petsModalWrapper.addEventListener("mouseover", function () {
        buttonModal = buttonModalCloseActive.querySelector(
          ".button__modal-close"
        );
        buttonModal.classList.remove("hover");
      });
    }
    let petsModalWrapper = document.querySelectorAll(".pets__modal_wrapper");
    petsModalWrapper.forEach((el) => {
      el.addEventListener("mouseleave", mouseLeave);
    });
  }
  rightCards();

  function leftCards() {
    randomIndex = randomIndArrLeft();
    for (let i = 0; i < 3; i++) {
      let div = createPetsCard();
      div.innerHTML = `
    <img class="pets__card-img"
      src="${arr[randomIndex[i]].img}"
      alt="${arr[randomIndex[i]].breed}"/>
    <span class="pets__name">${arr[randomIndex[i]].name}</span>
    <button class="button button_border button__pets">
    Learn more
    </button>
    <div class = "modal__wrapper">
    <div class = "pets__modal_wrapper">
    <button class = "button__modal-close">
    <p class ="close__code">&#10006;</p></button>
     <div class = "pets__modal">
      <img class="pets__modal-img"
      src="${arr[randomIndex[i]].img}"
      alt="${arr[randomIndex[i]].breed}"/>
       <div class = "modal__content">
       <h3 class = "modal__pets_name">${arr[randomIndex[i]].name}</h3>
       <h4 class ="modal__pets_type">${arr[randomIndex[i]].type} - ${
        arr[randomIndex[i]].breed
      }</h4>
       <p class ="modal__pets_desc">${arr[randomIndex[i]].description}</p>
       <ul class ="modal__pets_items">
       <li class = "modal__item"><span class = "modal__text">Age:</span>${
         arr[randomIndex[i]].age
       }</li>
       <li class = "modal__item"><span class = "modal__text">Inoculations:</span> ${
         arr[randomIndex[i]].inoculations
       }</li>
       <li class = "modal__item"><span class = "modal__text">Diseases: </span>${
         arr[randomIndex[i]].diseases
       }</li>
       <li class = "modal__item"><span class = "modal__text">Parasites: </span>${
         arr[randomIndex[i]].parasites
       }</li>
       </ul>
       </div>
      </div>
      <div>
     </div>
     `;
      petsLeft.append(div);
    }
    /*Popup */
    let buttonPets = document.querySelectorAll(".button__pets");
    buttonPets.forEach((el) => {
      el.addEventListener("click", learnMore);
    });

    /*mouse*/
    let buttonModal;
    function mouseLeave(event) {
      event.preventDefault();
      let buttonModalCloseActive = event.relatedTarget;
      if (buttonModalCloseActive) {
        console.log(buttonModalCloseActive);
        buttonModal = buttonModalCloseActive.querySelector(
          ".button__modal-close"
        );
        buttonModal.classList.add("hover");
      }
      let petsModalWrapper = event.target;
      petsModalWrapper.addEventListener("mouseover", function () {
        buttonModal = buttonModalCloseActive.querySelector(
          ".button__modal-close"
        );
        buttonModal.classList.remove("hover");
      });
    }
    let petsModalWrapper = document.querySelectorAll(".pets__modal_wrapper");
    petsModalWrapper.forEach((el) => {
      el.addEventListener("mouseleave", mouseLeave);
    });
  }
  leftCards();

  petsWrapper.addEventListener("animationend", (event) => {
    if (event.animationName == "toright") {
      petsWrapper.classList.remove("right");
      document.getElementById("pets_center").innerHTML = petsRight.innerHTML;
      currentCard1 = rightInd1;
      currentCard2 = rightInd2;
      currentCard3 = rightInd3;
      petsRight.innerHTML = "";
      petsLeft.innerHTML = "";
      rightCards();
      leftCards();
    } else {
      petsWrapper.classList.remove("left");
      document.getElementById("pets_center").innerHTML = petsLeft.innerHTML;
      currentCard1 = leftInd1;
      currentCard2 = leftInd2;
      currentCard3 = leftInd3;
      petsLeft.innerHTML = "";
      petsRight.innerHTML = "";
      rightCards();
      leftCards();
    }
    buttonArrowRight.addEventListener("click", right);
    buttonArrowLeft.addEventListener("click", left);
  });
}

buttonArrowRight.addEventListener("click", right);
buttonArrowLeft.addEventListener("click", left);

function right() {
  petsWrapper.classList.add("right");
  buttonArrowRight.removeEventListener("click", right);
  buttonArrowLeft.removeEventListener("click", left);
}
function left() {
  petsWrapper.classList.add("left");
  buttonArrowRight.removeEventListener("click", right);
  buttonArrowLeft.removeEventListener("click", left);
}

fetch("pets.json") //path to the file with json data
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    getData(data);
  });
