/*Screen size */
function windowsize() {
  petsWrapper.style.cssText = "";
  let windowWidth = window.innerWidth; ///window.screen.width;
  if (windowWidth > 1280) {
    petsWrapper.style.cssText = `max-width: 990px;`;
  } else if (windowWidth <= 1279 && windowWidth > 767) {
    petsWrapper.style.cssText = `width: 600px;
     margin: 0 10px 0 10px`;
  } else if (windowWidth <= 767) {
    pets.style.cssText = ` justify-content: center;`;
    petsWrapper.style.cssText = `width: 270px`;
  }
}

/*burger */
let burger = document.querySelector(".header__burger");
let headerNav = document.querySelector(".header__navigation");
let headerBurger = document.querySelector(".header__burger");
let headerLogo = document.querySelector(".header__logo");

burger.addEventListener("click", (event) => {
  event.preventDefault();
  headerNav.classList.toggle("active");
  burger.classList.toggle("close");
  headerLogo.classList.toggle("change");
  if (headerBurger.classList.contains("close")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

headerNav.addEventListener("click", () => {
  if (headerNav.classList.contains("active")) {
    headerNav.classList.toggle("active");
    burger.classList.toggle("close");
    headerLogo.classList.toggle("change");
    document.body.style.overflow = "";
  }
});

let navigationItem = document.querySelectorAll(".navigation__item");
navigationItem.forEach((el) => {
  el.addEventListener("click", () => {
    headerNav.classList.remove("active");
    burger.classList.remove("close");
    headerLogo.classList.remove("change");
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
let pets = document.querySelector(".pets");

let div1 = document.createElement("div");
div1.classList = "pets__card";
let div2 = document.createElement("div");
div2.classList = "pets__card";
let div3 = document.createElement("div");
div3.classList = "pets__card";

let currentCard1 = -1;
let currentCard2 = -1;
let currentCard3 = -1;

let arr;

function getData(arr) {
  windowsize();

  let ind1;
  let ind2;
  let ind3;
  while (true) {
    ind1 = Math.floor(Math.random() * arr.length);
    if (ind1 != currentCard1 && ind1 != currentCard2 && ind1 != currentCard3) {
      break;
    }
  }
  while (true) {
    ind2 = Math.floor(Math.random() * arr.length);
    if (
      ind2 != currentCard1 &&
      ind2 != currentCard2 &&
      ind2 != currentCard3 &&
      ind2 != ind1
    ) {
      break;
    }
  }
  while (true) {
    ind3 = Math.floor(Math.random() * arr.length);
    if (
      ind3 != currentCard1 &&
      ind3 != currentCard2 &&
      ind3 != currentCard3 &&
      ind3 != ind1 &&
      ind3 != ind2
    ) {
      break;
    }
  }
  currentCard1 = ind1;
  currentCard2 = ind2;
  currentCard3 = ind3;

  div1.innerHTML = `
    <img class="pets__card-img"
      src="${arr[currentCard1].img}"
      alt="${arr[currentCard1].breed}"/>
    <span class="pets__name">${arr[currentCard1].name}</span>
    <button class="button button_border button__pets">
    Learn more
    </button>
    <div class = "modal__wrapper">
    <div class = "pets__modal_wrapper">
    <button class = "button__modal-close">
    <p class ="close__code">&#10006;</p></button>
     <div class = "pets__modal">
      <img class="pets__modal-img"
      src="${arr[currentCard1].img}"
      alt="${arr[currentCard1].breed}"/>
       <div class = "modal__content">
       <h3 class = "modal__pets_name">${arr[currentCard1].name}</h3>
       <h4 class ="modal__pets_type">${arr[currentCard1].type} - ${arr[currentCard1].breed}</h4>
       <p class ="modal__pets_desc">${arr[currentCard1].description}</p>
       <ul class ="modal__pets_items">
       <li class = "modal__item"><span class = "modal__text">Age:</span>${arr[currentCard1].age}</li>
       <li class = "modal__item"><span class = "modal__text">Inoculations:</span> ${arr[currentCard1].inoculations}</li>
       <li class = "modal__item"><span class = "modal__text">Diseases: </span>${arr[currentCard1].diseases}</li>
       <li class = "modal__item"><span class = "modal__text">Parasites: </span>${arr[currentCard1].parasites}</li>
       </ul>
       </div>
      </div>
      <div>
    </div>
  `;
  pets.append(div1);

  div2.innerHTML = `
    <img class="pets__card-img"
      src="${arr[currentCard2].img}"
      alt="${arr[currentCard2].breed}"/>
    <span class="pets__name">${arr[currentCard2].name}</span>
    <button class="button button_border button__pets">
    Learn more
    </button>
    <div class = "modal__wrapper">
    <div class = "pets__modal_wrapper">
    <button class = "button__modal-close">
    <p class ="close__code">&#10006;</p></button>
     <div class = "pets__modal">
      <img class="pets__modal-img"
      src="${arr[currentCard2].img}"
      alt="${arr[currentCard2].breed}"/>
       <div class = "modal__content">
       <h3 class = "modal__pets_name">${arr[currentCard2].name}</h3>
       <h4 class ="modal__pets_type">${arr[currentCard2].type} - ${arr[currentCard2].breed}</h4>
       <p class ="modal__pets_desc">${arr[currentCard2].description}</p>
       <ul class ="modal__pets_items">
       <li class = "modal__item"><span class = "modal__text">Age:</span>${arr[currentCard2].age}</li>
       <li class = "modal__item"><span class = "modal__text">Inoculations:</span>${arr[currentCard2].inoculations}</li>
       <li class = "modal__item"><span class = "modal__text">Diseases: </span> ${arr[currentCard2].diseases}</li>
       <li class = "modal__item"><span class = "modal__text">Parasites: </span> ${arr[currentCard2].parasites}</li>
       </ul>
       </div>
      </div>
      </div>
    </div>
  `;
  pets.append(div2);

  div3.innerHTML = `
    <img class="pets__card-img"
      src="${arr[currentCard3].img}"
      alt="${arr[currentCard3].breed}"/>
    <span class="pets__name">${arr[currentCard3].name}</span>
    <button class="button button_border button__pets">
    Learn more
    </button>
    <div class = "modal__wrapper">
    <div class = "pets__modal_wrapper">
    <button class = "button__modal-close">
    <p class ="close__code">&#10006;</p></button>
     <div class = "pets__modal">
      <img class="pets__modal-img"
      src="${arr[currentCard3].img}"
      alt="${arr[currentCard3].breed}"/>
       <div class = "modal__content">
         <h3 class = "modal__pets_name">${arr[currentCard3].name}</h3>
         <h4 class ="modal__pets_type">${arr[currentCard3].type} - ${arr[currentCard3].breed}</h4>
         <p class ="modal__pets_desc">${arr[currentCard3].description}</p>
          <ul class ="modal__pets_items">
           <li class = "modal__item"><span class = "modal__text">Age:</span>${arr[currentCard3].age}</li>
           <li class = "modal__item"><span class = "modal__text">Inoculations:</span> ${arr[currentCard3].inoculations}</li>
           <li class = "modal__item"><span class = "modal__text">Diseases: </span>${arr[currentCard3].diseases}</li>
           <li class = "modal__item"><span class = "modal__text">Parasites: </span> ${arr[currentCard3].parasites}</li>
         </ul>
       </div>
      </div>
      </div>
    </div>
  `;
  pets.append(div3);
  /*Popup */
  let buttonPets = document.querySelectorAll(".button__pets");
  buttonPets.forEach((el) => {
    el.addEventListener("click", learnMore);
  });

  /*mouse*/
  function mouseLeave(event) {
    event.preventDefault();
    let buttonModalCloseActive = event.relatedTarget;
    if (buttonModalCloseActive) {
      console.log(buttonModalCloseActive);
      let buttonModal = buttonModalCloseActive.querySelector(
        ".button__modal-close"
      );
      buttonModal.classList.add("hover");
    }
    let petsModalWrapper = event.target;
    petsModalWrapper.addEventListener("mouseover", function () {
      let buttonModal = buttonModalCloseActive.querySelector(
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

function changeCardsRight(arr) {
  let ind1;
  let ind2;
  let ind3;
  while (true) {
    ind1 = Math.floor(Math.random() * arr.length);
    if (ind1 != currentCard1 && ind1 != currentCard2 && ind1 != currentCard3) {
      break;
    }
  }
  while (true) {
    ind2 = Math.floor(Math.random() * arr.length);
    if (
      ind2 != currentCard1 &&
      ind2 != currentCard2 &&
      ind2 != currentCard3 &&
      ind2 != ind1
    ) {
      break;
    }
  }
  while (true) {
    ind3 = Math.floor(Math.random() * arr.length);
    if (
      ind3 != currentCard1 &&
      ind3 != currentCard2 &&
      ind3 != currentCard3 &&
      ind3 != ind1 &&
      ind3 != ind2
    ) {
      break;
    }
  }
  currentCard1 = ind1;
  currentCard2 = ind2;
  currentCard3 = ind3;

  div1.innerHTML = `
    <img class="pets__card-img"
      src="${arr[currentCard1].img}"
      alt="${arr[currentCard1].breed}"/>
    <span class="pets__name">${arr[currentCard1].name}</span>
    <button class="button button_border button__pets">
    Learn more
    </button>
    <div class = "modal__wrapper">
    <div class = "pets__modal_wrapper">
    <button class = "button__modal-close">
    <p class ="close__code">&#10006;</p></button>
     <div class = "pets__modal">
      <img class="pets__modal-img"
      src="${arr[currentCard1].img}"
      alt="${arr[currentCard1].breed}"/>
       <div class = "modal__content">
       <h3 class = "modal__pets_name">${arr[currentCard1].name}</h3>
       <h4 class ="modal__pets_type">${arr[currentCard1].type} - ${arr[currentCard1].breed}</h4>
       <p class ="modal__pets_desc">${arr[currentCard1].description}</p>
       <ul class ="modal__pets_items">
       <li class = "modal__item"><span class = "modal__text">Age:</span>${arr[currentCard1].age}</li>
       <li class = "modal__item"><span class = "modal__text">Inoculations:</span> ${arr[currentCard1].inoculations}</li>
       <li class = "modal__item"><span class = "modal__text">Diseases: </span> ${arr[currentCard1].diseases}</li>
       <li class = "modal__item"><span class = "modal__text">Parasites: </span> ${arr[currentCard1].parasites}</li>
       </ul>
       </div>
      </div>
      </div>
    </div>
  `;

  div2.innerHTML = `
    <img class="pets__card-img"
      src="${arr[currentCard2].img}"
      alt="${arr[currentCard2].breed}"/>
    <span class="pets__name">${arr[currentCard2].name}</span>
    <button class="button button_border button__pets">
    Learn more
    </button>
    <div class = "modal__wrapper">
    <div class = "pets__modal_wrapper">
    <button class = "button__modal-close">
    <p class ="close__code">&#10006;</p></button>
     <div class = "pets__modal">
      <img class="pets__modal-img"
      src="${arr[currentCard2].img}"
      alt="${arr[currentCard2].breed}"/>
       <div class = "modal__content">
       <h3 class = "modal__pets_name">${arr[currentCard2].name}</h3>
       <h4 class ="modal__pets_type">${arr[currentCard2].type} - ${arr[currentCard2].breed}</h4>
       <p class ="modal__pets_desc">${arr[currentCard2].description}</p>
       <ul class ="modal__pets_items">
       <li class = "modal__item"><span class = "modal__text">Age:</span>${arr[currentCard2].age}</li>
       <li class = "modal__item"><span class = "modal__text">Inoculations:</span> ${arr[currentCard2].inoculations}</li>
       <li class = "modal__item"><span class = "modal__text">Diseases: </span>${arr[currentCard2].diseases}</li>
       <li class = "modal__item"><span class = "modal__text">Parasites: </span> ${arr[currentCard2].parasites}</li>
       </ul>
       </div>
      </div>
      </div>
    </div>
  `;

  div3.innerHTML = `
    <img class="pets__card-img"
      src="${arr[currentCard3].img}"
      alt="${arr[currentCard3].breed}"/>
    <span class="pets__name">${arr[currentCard3].name}</span>
    <button class="button button_border button__pets">
    Learn more
    </button>
    <div class = "modal__wrapper">
    <div class = "pets__modal_wrapper">
      <button class = "button__modal-close">
    <p class ="close__code">&#10006;</p></button>
      <div class = "pets__modal">
       <img class="pets__modal-img"
       src="${arr[currentCard3].img}"
       alt="${arr[currentCard3].breed}"/>
        <div class = "modal__content">
         <h3 class = "modal__pets_name">${arr[currentCard3].name}</h3>
       <h4 class ="modal__pets_type">${arr[currentCard3].type} - ${arr[currentCard3].breed}</h4>
       <p class ="modal__pets_desc">${arr[currentCard3].description}</p>
         <ul class ="modal__pets_items">
           <li class = "modal__item"><span class = "modal__text">Age:</span>${arr[currentCard3].age}</li>
          <li class = "modal__item"><span class = "modal__text">Inoculations:</span> ${arr[currentCard3].inoculations}</li>
           <li class = "modal__item"><span class = "modal__text">Diseases: </span> ${arr[currentCard3].diseases}</li>
           <li class = "modal__item"><span class = "modal__text">Parasites: </span> ${arr[currentCard3].parasites}</li>
         </ul>
       </div>
      </div>
      </div>
    </div>
  `;
  /*Popup */
  let buttonPets = document.querySelectorAll(".button__pets");
  buttonPets.forEach((el) => {
    el.addEventListener("click", learnMore);
  });
}

fetch("pets.json") //path to the file with json data
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    getData(data);
  });

function changeCards() {
  fetch("pets.json") //path to the file with json data
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      changeCardsRight(data);
    });
}
buttonArrowRight.addEventListener("click", changeCards);
buttonArrowLeft.addEventListener("click", changeCards);
