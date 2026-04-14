const stars = document.querySelectorAll(".star");
const container = document.querySelector(".stars-container");

const imgEmpty = "star-empty.png";
const imgFilled = "star.png";

let currentRating = -1;
let isClicked = false;

function updateStars(activeIndex) {
  stars.forEach((star, index) => {
    if (index <= activeIndex) {
      star.src = imgFilled;
    } else {
      star.src = imgEmpty;
    }
  });
}

stars.forEach((star, index) => {
  star.addEventListener("mouseover", () => {
    updateStars(index);
  });

  star.addEventListener("click", () => {
    currentRating = index;
    isClicked = true;
  });
});

container.addEventListener("mouseleave", () => {
  if (isClicked) {
    updateStars(currentRating);
  } else {
    updateStars(-1);
  }
});
