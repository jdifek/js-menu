const pie = document.querySelector(".pie-chart");
const sliceContainerCvk = document.querySelector(".slice-container-cvk");
const sliceContainerUti = document.querySelector(".slice-container-uti");
const sliceContainerCdi = document.querySelector(".slice-container-cdi");
const sliceContainerIp = document.querySelector(".slice-container-ip");

const two = document.querySelector(".CVK-second");
const UTItwo = document.querySelector(".UTI-second");
const UTIfour = document.querySelector(".UTI-four");
const twoLeft = document.querySelector(".CVK-second-left");
const twoLeftBox = document.querySelector(".CVK-inner-box__left");

const twoLeftBoxOne = document.querySelector(".CVK-inner-box__left-one");
const twoLeftBoxTwo = document.querySelector(".CVK-inner-box__left-two");
const twoLeftBoxThree = document.querySelector(".CVK-inner-box__left-three");
const twoLeftBoxFour = document.querySelector(".CVK-inner-box__left-four");
const UTItwoLeftBoxOne = document.querySelector(".UTI-inner-box__left-one");
const UTItwoLeftBoxTwo = document.querySelector(".UTI-inner-box__left-two");
const UTItwoLeftBoxThree = document.querySelector(".UTI-inner-box__left-three");
const UTItwoLeftBoxFour = document.querySelector(".UTI-inner-box__left-four");

const twoRightBoxOne = document.querySelector(".CVK-inner-box__right-one");
const twoRightBoxTwo = document.querySelector(".CVK-inner-box__right-two");
const twoRightBoxThree = document.querySelector(".CVK-inner-box__right-three");
const twoRightBoxFour = document.querySelector(".CVK-inner-box__right-four");
const UTItwoRightBoxOne = document.querySelector(".UTI-inner-box__right-one");
const UTItwoRightBoxTwo = document.querySelector(".UTI-inner-box__right-two");
const UTItwoRightBoxThree = document.querySelector(".UTI-inner-box__right-three");
const UTItwoRightBoxFour = document.querySelector(".UTI-inner-box__right-four");

const third = document.querySelector(".CVK-third");
const UTIthird = document.querySelector(".UTI-third");
const four = document.querySelector(".CVK-four");

const twoRight = document.querySelector(".CVK-second-right");
const twoRigthBox = document.querySelector(".CVK-inner-box__right");

const UTItwoRight = document.querySelector(".UTI-second-right");
const UTItwoRightBox = document.querySelector(".UTI-inner-box__right");
const UTItwoLeft = document.querySelector(".UTI-second-left");
const UTItwoLeftBox = document.querySelector(".UTI-inner-box__left");


const thirdsliceContainerOne = document.querySelector(".CVK-thirdslice-container-one");
const thirdsliceContainerTwo = document.querySelector(".CVK-thirdslice-container-two");
const thirdsliceContainerThree = document.querySelector(".CVK-thirdslice-container-three");
const thirdsliceContainerFour = document.querySelector(".CVK-thirdslice-container-four");
const UTIthirdsliceContainerOne = document.querySelector(".UTI-thirdslice-container-one");
const UTIthirdsliceContainerTwo = document.querySelector(".UTI-thirdslice-container-two");
const UTIthirdsliceContainerThree = document.querySelector(".UTI-thirdslice-container-three");
const UTIthirdsliceContainerFour = document.querySelector(".UTI-thirdslice-container-four");

const UTIfourliceContainerOne = document.querySelector(".UTI-fourlice-container-one");
const UTIfourliceContainerTwo = document.querySelector(".UTI-fourlice-container-two");
const UTIfourliceContainerThree = document.querySelector(".UTI-fourlice-container-three");
const UTIfourliceContainerFour = document.querySelector(".UTI-fourlice-container-four");
const fourliceContainerOne = document.querySelector(".CVK-fourlice-container-one");
const fourliceContainerTwo = document.querySelector(".CVK-fourlice-container-two");
const fourliceContainerThree = document.querySelector(".CVK-fourlice-container-three");
const fourliceContainerFour = document.querySelector(".CVK-fourlice-container-four");
const fourlicelastLeftOne = document.querySelector(".CVK-fourlice-container-last-left-one");
const fourlicelastLeftTwo = document.querySelector(".CVK-fourlice-container-last-two");
const fourlicelastLeftThree = document.querySelector(".CVK-fourlice-container-last-left-three");
const fourlicelastLeftFour = document.querySelector(".CVK-fourlice-container-last-four");
const UTIfourlicelastLeftOne = document.querySelector(".UTI-fourlice-container-last-left-one");
const UTIfourlicelastLeftTwo = document.querySelector(".UTI-fourlice-container-last-two");
const UTIfourlicelastLeftThree = document.querySelector(".UTI-fourlice-container-last-left-three");
const UTIfourlicelastLeftFour = document.querySelector(".UTI-fourlice-container-last-four");
const UTIthirdslicelastLeftOne = document.querySelector(".UTI-thirdslice-container-last-left-one");
const UTIthirdslicelastLeftTwo = document.querySelector(".UTI-thirdslice-container-last-two");
const UTIthirdslicelastLeftThree = document.querySelector(".UTI-thirdslice-container-last-left-three");
const UTIthirdslicelastLeftFour = document.querySelector(".UTI-thirdslice-container-last-four");

const lastLeftOne = document.querySelector(".CVK-thirdslice-container-last-left-one");
const lastLeftTwo = document.querySelector(".CVK-thirdslice-container-last-two");
const lastLeftThree = document.querySelector(".CVK-thirdslice-container-last-left-three");
const lastLeftFour = document.querySelector(".CVK-thirdslice-container-last-four");

const ipFourliceContainerLastFour = document.querySelector('.ip-fourlice-container-last-four');
const CDIFourliceContainerLastFour = document.querySelector('.CDI-fourlice-container-last-left-one ');

sliceContainerCdi.addEventListener('click', () => {
  CDIFourliceContainerLastFour.style.display = 'flex';
  ipFourliceContainerLastFour.style.display = 'none';

})

sliceContainerIp.addEventListener('click', () => {
  ipFourliceContainerLastFour.style.display = 'flex';
  CDIFourliceContainerLastFour.style.display = 'none';

})

UTIthirdsliceContainerOne.addEventListener('click', () => {
  UTIthirdslicelastLeftOne.style.display = "flex";
  UTIthirdslicelastLeftTwo.style.display = "none";
  UTIthirdslicelastLeftThree.style.display = "none";
  UTIthirdslicelastLeftFour.style.display = "none";
});

UTIthirdsliceContainerTwo.addEventListener('click', () => {
  UTIthirdslicelastLeftOne.style.display = "none";
  UTIthirdslicelastLeftTwo.style.display = "flex";
  UTIthirdslicelastLeftThree.style.display = "none";
  UTIthirdslicelastLeftFour.style.display = "none";
});

UTIthirdsliceContainerThree.addEventListener('click', () => {
  UTIthirdslicelastLeftOne.style.display = "none";
  UTIthirdslicelastLeftTwo.style.display = "none";
  UTIthirdslicelastLeftThree.style.display = "flex";
  UTIthirdslicelastLeftFour.style.display = "none";
});

UTIthirdsliceContainerFour.addEventListener('click', () => {
  UTIthirdslicelastLeftOne.style.display = "none";
  UTIthirdslicelastLeftTwo.style.display = "none";
  UTIthirdslicelastLeftThree.style.display = "none";
  UTIthirdslicelastLeftFour.style.display = "flex";
});
UTIfourliceContainerOne.addEventListener('click', () => {
  UTIfourlicelastLeftOne.style.display = "flex";
  UTIfourlicelastLeftTwo.style.display = "none";
  UTIfourlicelastLeftThree.style.display = "none";
  UTIfourlicelastLeftFour.style.display = "none";
});

UTIfourliceContainerTwo.addEventListener('click', () => {
  UTIfourlicelastLeftOne.style.display = "none";
  UTIfourlicelastLeftTwo.style.display = "flex";
  UTIfourlicelastLeftThree.style.display = "none";
  UTIfourlicelastLeftFour.style.display = "none";
});

UTIfourliceContainerThree.addEventListener('click', () => {
  UTIfourlicelastLeftOne.style.display = "none";
  UTIfourlicelastLeftTwo.style.display = "none";
  UTIfourlicelastLeftThree.style.display = "flex";
  UTIfourlicelastLeftFour.style.display = "none";
});

UTIfourliceContainerFour.addEventListener('click', () => {
  UTIfourlicelastLeftOne.style.display = "none";
  UTIfourlicelastLeftTwo.style.display = "none";
  UTIfourlicelastLeftThree.style.display = "none";
  UTIfourlicelastLeftFour.style.display = "flex";
});
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

UTItwoRightBoxOne.addEventListener("click", () => {
  UTItwo.style.display = "none";
  UTIfour.style.display = "block";
});

UTItwoRightBoxTwo.addEventListener("click", () => {
  UTItwo.style.display = "none";
  UTIfour.style.display = "block";
});

UTItwoRightBoxThree.addEventListener("click", () => {
  UTItwo.style.display = "none";
  UTIfour.style.display = "block";
});

UTItwoRightBoxFour.addEventListener("click", () => {
  UTItwo.style.display = "none";
  UTIfour.style.display = "block";
});

UTItwoLeftBoxOne.addEventListener("click", () => {
  UTItwo.style.display = "none";
  UTIthird.style.display = "block";
});

UTItwoLeftBoxTwo.addEventListener("click", () => {
  UTItwo.style.display = "none";
  UTIthird.style.display = "block";
});

UTItwoLeftBoxThree.addEventListener("click", () => {
  UTItwo.style.display = "none";
  UTIthird.style.display = "block";
});

UTItwoLeftBoxFour.addEventListener("click", () => {
  UTItwo.style.display = "none";
  UTIthird.style.display = "block";
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

sliceContainerUti.addEventListener("click", () => {
  UTItwo.style.display = "block";
  pie.style.display = "none";
});
// Логика для левой части
twoLeft.addEventListener("click", () => {
  if (twoLeftBox.style.opacity === "100%") {
    twoLeftBox.style.opacity = "0";
    twoLeftBox.style.pointerEvents = "none";
  } else {
    twoLeftBox.style.opacity = "100%";
    twoLeftBox.style.pointerEvents = "auto";
  }
});

// Логика для правой части
twoRight.addEventListener("click", () => {
  if (twoRigthBox.style.opacity === "100%") {
    twoRigthBox.style.opacity = "0";
    twoRigthBox.style.pointerEvents = "none";
  } else {
    twoRigthBox.style.opacity = "100%";
    twoRigthBox.style.pointerEvents = "auto";
  }
});

// Логика для UTI правой части
UTItwoRight.addEventListener("click", () => {
  if (UTItwoRightBox.style.opacity === "100%") {
    UTItwoRightBox.style.opacity = "0";
    UTItwoRightBox.style.pointerEvents = "none";
  } else {
    UTItwoRightBox.style.opacity = "100%";
    UTItwoRightBox.style.pointerEvents = "auto";
  }
});

// Логика для UTI левой части
UTItwoLeft.addEventListener("click", () => {
  if (UTItwoLeftBox.style.opacity === "100%") {
    UTItwoLeftBox.style.opacity = "0";
    UTItwoLeftBox.style.pointerEvents = "none";
  } else {
    UTItwoLeftBox.style.opacity = "100%";
    UTItwoLeftBox.style.pointerEvents = "auto";
  }
});
