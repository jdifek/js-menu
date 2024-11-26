const pie = document.querySelector(".pie-chart");
const sliceContainerCvk = document.querySelector(".slice-container-cvk");

const two = document.querySelector(".CVK-second");
const twoLeft = document.querySelector(".CVK-second-left");
const twoLeftBox = document.querySelector(".CVK-inner-box__left");
const twoLeftBoxOne = document.querySelector(".CVK-inner-box__left-one");
const twoLeftBoxTwo = document.querySelector(".CVK-inner-box__left-two");
const twoLeftBoxThree = document.querySelector(".CVK-inner-box__left-three");
const twoLeftBoxFour = document.querySelector(".CVK-inner-box__left-four");

const twoRightBoxOne = document.querySelector(".CVK-inner-box__right-one");
const twoRightBoxTwo = document.querySelector(".CVK-inner-box__right-two");
const twoRightBoxThree = document.querySelector(".CVK-inner-box__right-three");
const twoRightBoxFour = document.querySelector(".CVK-inner-box__right-four");

const third = document.querySelector(".CVK-third");
const four = document.querySelector(".CVK-four");

const twoRight = document.querySelector(".CVK-second-right");
const twoRigthBox = document.querySelector(".CVK-inner-box__right");


const thirdsliceContainerOne = document.querySelector(".CVK-thirdslice-container-one");
const thirdsliceContainerTwo = document.querySelector(".CVK-thirdslice-container-two");
const thirdsliceContainerThree = document.querySelector(".CVK-thirdslice-container-three");
const thirdsliceContainerFour = document.querySelector(".CVK-thirdslice-container-four");

const fourliceContainerOne = document.querySelector(".CVK-fourlice-container-one");
const fourliceContainerTwo = document.querySelector(".CVK-fourlice-container-two");
const fourliceContainerThree = document.querySelector(".CVK-fourlice-container-three");
const fourliceContainerFour = document.querySelector(".CVK-fourlice-container-four");
const fourlicelastLeftOne = document.querySelector(".CVK-fourlice-container-last-left-one");
const fourlicelastLeftTwo = document.querySelector(".CVK-fourlice-container-last-two");
const fourlicelastLeftThree = document.querySelector(".CVK-fourlice-container-last-left-three");
const fourlicelastLeftFour = document.querySelector(".CVK-fourlice-container-last-four");


const lastLeftOne = document.querySelector(".CVK-thirdslice-container-last-left-one");
const lastLeftTwo = document.querySelector(".CVK-thirdslice-container-last-two");
const lastLeftThree = document.querySelector(".CVK-thirdslice-container-last-left-three");
const lastLeftFour = document.querySelector(".CVK-thirdslice-container-last-four");

fourliceContainerOne.addEventListener('click', () => {
  fourlicelastLeftOne.style.display = "flex";
  fourlicelastLeftTwo.style.display = "none";
  fourlicelastLeftThree.style.display = "none";
  fourlicelastLeftFour.style.display = "none";
});

fourliceContainerTwo.addEventListener('click', () => {
  fourlicelastLeftOne.style.display = "none";
  fourlicelastLeftTwo.style.display = "flex";
  fourlicelastLeftThree.style.display = "none";
  fourlicelastLeftFour.style.display = "none";
});

fourliceContainerThree.addEventListener('click', () => {
  fourlicelastLeftOne.style.display = "none";
  fourlicelastLeftTwo.style.display = "none";
  fourlicelastLeftThree.style.display = "flex";
  fourlicelastLeftFour.style.display = "none";
});

fourliceContainerFour.addEventListener('click', () => {
  fourlicelastLeftOne.style.display = "none";
  fourlicelastLeftTwo.style.display = "none";
  fourlicelastLeftThree.style.display = "none";
  fourlicelastLeftFour.style.display = "flex";
});

thirdsliceContainerOne.addEventListener('click', () => {
  lastLeftOne.style.display = "flex";
  lastLeftTwo.style.display = "none";
  lastLeftThree.style.display = "none";
  lastLeftFour.style.display = "none";
});

thirdsliceContainerTwo.addEventListener('click', () => {
  lastLeftOne.style.display = "none";
  lastLeftTwo.style.display = "flex";
  lastLeftThree.style.display = "none";
  lastLeftFour.style.display = "none";
});

thirdsliceContainerThree.addEventListener('click', () => {
  lastLeftOne.style.display = "none";
  lastLeftTwo.style.display = "none";
  lastLeftThree.style.display = "flex";
  lastLeftFour.style.display = "none";
});

thirdsliceContainerFour.addEventListener('click', () => {
  lastLeftOne.style.display = "none";
  lastLeftTwo.style.display = "none";
  lastLeftThree.style.display = "none";
  lastLeftFour.style.display = "flex";
});

twoRightBoxOne.addEventListener("click", () => {
  two.style.display = "none";
  four.style.display = "block";

});
twoRightBoxTwo.addEventListener("click", () => {
  two.style.display = "none";
  four.style.display = "block";

});
twoRightBoxThree.addEventListener("click", () => {
  two.style.display = "none";
  four.style.display = "block";

});
twoRightBoxFour.addEventListener("click", () => {
  two.style.display = "none";
  four.style.display = "block";

});

twoLeftBoxOne.addEventListener("click", () => {
    two.style.display = "none";
    third.style.display = "block";

});
twoLeftBoxTwo.addEventListener("click", () => {
    two.style.display = "none";
    third.style.display = "block";

});
twoLeftBoxThree.addEventListener("click", () => {
    two.style.display = "none";
    third.style.display = "block";

});
twoLeftBoxFour.addEventListener("click", () => {
    two.style.display = "none";
    third.style.display = "block";

});

sliceContainerCvk.addEventListener("click", () => {
  two.style.display = "block";
  pie.style.display = "none";
});

// При наведении на левую часть
twoLeft.addEventListener("mouseover", () => {
  twoLeftBox.style.opacity = "100%";
  twoLeftBox.style.pointerEvents = "auto";
});

twoRigthBox.addEventListener("mouseover", () => {
  twoRigthBox.style.opacity = "100%";
  twoRigthBox.style.pointerEvents = "auto";
});

// При уходе курсора с левой части
twoLeft.addEventListener("mouseout", () => {
  // Убираем задержку, чтобы блок исчезал сразу
  setTimeout(() => {
    twoLeftBox.style.opacity = "0";
    twoLeftBox.style.pointerEvents = "none";
  }, 2000);
});

// При наведении на правую часть
twoRight.addEventListener("mouseover", () => {
  twoRigthBox.style.opacity = "100%";
  twoRigthBox.style.pointerEvents = "auto";
});

// При уходе курсора с правой части
twoRight.addEventListener("mouseout", () => {
  setTimeout(() => {
    twoRigthBox.style.opacity = "0";
    twoRigthBox.style.pointerEvents = "none";
  }, 2000);
});
