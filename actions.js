function toggleAnswer() {
  answers[this.dataset.id].classList.toggle("hidden");
  arrows[this.dataset.id].classList.toggle("rotate");
  questions[this.dataset.id].classList.toggle("active");
}

const questionBlocks = document.querySelectorAll(".question");
const answers = document.querySelectorAll("p");
const arrows = document.querySelectorAll(".arrow");
const questions = document.querySelectorAll("h3");

questionBlocks.forEach((block) =>
  block.addEventListener("click", toggleAnswer)
);
