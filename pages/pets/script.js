let burger = document.querySelector(".header__burger");
let headerNav = document.querySelector(".header__navigation");
let headerBurger = document.querySelector(".header__burger");
let headerLogo = document.querySelector(".header__logo");
let petsWrapper = document.querySelector(".pets__wrapper");
let pets = document.querySelector(".pets");

/*Burger */
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

/*Pagination */
let page = [0, 1, 2, 3, 4, 5, 6, 7];
let allPages = [];
function randArray(page) {
  for (let i = 0; i < 6; i++) {
    allPages.push(page);
  }
  return allPages.flat();
}

let pages;
let currentPage;
let perPage;
let pageIndex;
let arr;

let shuffledIndices = page
  .map((i) => [Math.random(), i])
  .sort()
  .map((i) => i[1]);
let indexMap = new Map();
for (let i = 0; i < 8; i++) {
  indexMap.set(i, shuffledIndices[i]);
}

/*Screen size */
function getPerPage() {
  let windowWidth = window.innerWidth;
  if (windowWidth > 1280) {
    currentPage = 1;
    perPage = 8;
  } else if (windowWidth <= 1279 && windowWidth > 767) {
    currentPage = 1;
    perPage = 6;
  } else if (windowWidth <= 767) {
    currentPage = 1;
    perPage = 3;
  }
  return perPage;
}

function getData(arr) {
  currentPage = 1;
  perPage = getPerPage();

  let itemsArray = randArray(page);
  let itemsArrayShuffled = [];

  let iterations = 48 / perPage;
  let currentIndex = 0;
  for (let i = 0; i < iterations; i++) {
    let currArr = itemsArray.slice(currentIndex, currentIndex + perPage);
    let curArrShuffled = currArr
      .map((i) => [Math.random(), i])
      .sort()
      .map((i) => i[1]);
    itemsArrayShuffled.push(curArrShuffled);

    currentIndex = currentIndex + perPage;
  }
  itemsArrayShuffled = itemsArrayShuffled.flat();

  changePage(perPage, currentPage);

  function changePage(perPage, currentPage) {
    pageIndex = perPage * currentPage - perPage;
    let endElement = pageIndex + perPage;
    let subArray = itemsArrayShuffled.slice(pageIndex, endElement);

    pets.innerHTML = " ";

    for (let j = 0; j < perPage; j++) {
      let div = document.createElement("div");
      div.setAttribute("id", `${j}`);
      div.classList = "pets__card";
      div.innerHTML = `
    <img class="pets__card-img"
      src="${arr[indexMap.get(subArray[j])].img}"
      alt="${arr[indexMap.get(subArray[j])].breed}"/>
    <span class="pets__name">${arr[indexMap.get(subArray[j])].name}</span>
    <button class="button button_border button__pets">
    Learn more
    </button>
    <div class = "modal__wrapper">
    <div class = "pets__modal_wrapper">
    <button class = "button__modal-close">
    <p class ="close__code">&#10006;</p></button>
     <div class = "pets__modal">
      <img class="pets__modal-img"
      src="${arr[indexMap.get(subArray[j])].img}"
      alt="${arr[indexMap.get(subArray[j])].breed}"/>
       <div class = "modal__content">
       <h3 class = "modal__pets_name">${
         arr[indexMap.get(subArray[j])].name
       }</h3>
       <h4 class ="modal__pets_type">${arr[indexMap.get(subArray[j])].type} - ${
        arr[indexMap.get(subArray[j])].breed
      }</h4>
       <p class ="modal__pets_desc">${
         arr[indexMap.get(subArray[j])].description
       }</p>
       <ul class ="modal__pets_items">
       <li class = "modal__item"><span class = "modal__text">Age:</span>${
         arr[indexMap.get(subArray[j])].age
       }</li>
       <li class = "modal__item"><span class = "modal__text">Inoculations:</span> ${
         arr[indexMap.get(subArray[j])].inoculations
       }</li>
       <li class = "modal__item"><span class = "modal__text">Diseases: </span> ${
         arr[indexMap.get(subArray[j])].diseases
       }</li>
       <li class = "modal__item"><span class = "modal__text">Parasites: </span>${
         arr[indexMap.get(subArray[j])].parasites
       }</li>
       </ul>
       </div>
      </div>
      </div>
    </div>
  `;
      pets.append(div);
    }

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
    let buttonPets = document.querySelectorAll(".button__pets");
    buttonPets.forEach((el) => {
      el.addEventListener("click", learnMore);
    });

    /*Mouse*/
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

  /*Buttons */
  let buttonActive = document.querySelector(".active");
  let arrowPrev = document.querySelector(".arrow_prev");
  let arrowNext = document.querySelector(".arrow_next");
  let arrowLeft = document.querySelector(".arrow_left");
  let arrowRight = document.querySelector(".arrow_right");

  arrowNext.addEventListener("click", (event) => {
    currentPage += 1;
    arrowPrev.disabled = false;
    arrowPrev.style.pointerEvents = "auto";
    arrowPrev.classList.remove("inactive");
    arrowLeft.disabled = false;
    arrowLeft.classList.remove("inactive");
    arrowLeft.style.pointerEvents = "auto";
    if (currentPage == 48 / perPage) {
      buttonActive.textContent = currentPage;
      arrowNext.disabled = true;
      arrowNext.classList.add("inactive");
      arrowNext.style.pointerEvents = "none";
      arrowRight.disabled = true;
      arrowRight.classList.add("inactive");
      arrowRight.style.pointerEvents = "none";
      changePage(perPage, currentPage);
    } else {
      changePage(perPage, currentPage);
      buttonActive.textContent = currentPage;
      arrowNext.disabled = false;
      arrowNext.classList.remove("inactive");
      arrowNext.style.pointerEvents = "auto";
    }
  });
  arrowPrev.addEventListener("click", (event) => {
    currentPage -= 1;
    arrowNext.disabled = false;
    if (currentPage == 1) {
      buttonActive.textContent = currentPage;
      changePage(perPage, currentPage);
      arrowPrev.disabled = true;
      arrowPrev.classList.add("inactive");
      arrowLeft.disabled = true;
      arrowLeft.classList.add("inactive");
      arrowLeft.style.pointerEvents = "none";
    } else {
      changePage(perPage, currentPage);
      arrowNext.style.pointerEvents = "auto";
      arrowNext.classList.remove("inactive");
      buttonActive.textContent = currentPage;
      arrowRight.disabled = false;
      arrowRight.classList.remove("inactive");
      arrowRight.style.pointerEvents = "auto";
    }
  });

  arrowLeft.addEventListener("click", () => {
    currentPage = 1;
    buttonActive.textContent = currentPage;
    arrowLeft.disabled = true;
    arrowRight.disabled = false;
    arrowLeft.classList.add("inactive");
    arrowRight.classList.remove("inactive");
    arrowRight.style.pointerEvents = "auto";
    arrowLeft.style.pointerEvents = "none";

    arrowNext.disabled = false;
    arrowNext.style.pointerEvents = "auto";
    arrowNext.classList.remove("inactive");
    arrowPrev.style.pointerEvents = "none";
    arrowPrev.disabled = true;
    arrowPrev.classList.add("inactive");
    changePage(perPage, currentPage);
  });
  arrowRight.addEventListener("click", () => {
    currentPage = 48 / perPage;
    buttonActive.textContent = currentPage;
    arrowLeft.disabled = false;
    arrowRight.disabled = true;
    arrowRight.classList.add("inactive");
    arrowLeft.classList.remove("inactive");
    arrowRight.style.pointerEvents = "none";
    arrowLeft.style.pointerEvents = "auto";

    arrowNext.disabled = true;
    arrowNext.style.pointerEvents = "none";
    arrowNext.classList.add("inactive");
    arrowPrev.style.pointerEvents = "auto";
    arrowPrev.disabled = false;
    arrowPrev.classList.remove("inactive");
    changePage(perPage, currentPage);
  });
}

fetch("page2.json") //path to the file with json data
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    getData(data);
  });
