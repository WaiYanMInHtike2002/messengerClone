const lineOneTag = document.querySelector(".lineOne");
const lineTwoTag = document.querySelector(".lineTwo");
const lineThreeTag = document.querySelector(".lineThree");
const thirdTag = document.querySelector(".third");
const forFlexTag = document.querySelector(".forFlex");
const mainTag = document.querySelector(".main");
const midTag = document.querySelector(".mid");

thirdTag.addEventListener("click", () => {
  if (thirdTag.classList.contains("thirdSub")) {
    lineOneTag.classList.remove("lineOneSub");
    lineTwoTag.style.opacity = 1;
    lineThreeTag.classList.remove("lineThreeSub");
    thirdTag.classList.remove("thirdSub");
    forFlexTag.classList.add("forFlexPlay");
    mainTag.classList.remove("subway");
  } else {
    lineOneTag.classList.add("lineOneSub");
    lineTwoTag.style.opacity = 0;
    lineThreeTag.classList.add("lineThreeSub");
    thirdTag.classList.add("thirdSub");
    forFlexTag.classList.remove("forFlexPlay");
    mainTag.classList.add("subway");
  }
});
midTag.addEventListener("click", () => {
  console.log("clicked");
});
