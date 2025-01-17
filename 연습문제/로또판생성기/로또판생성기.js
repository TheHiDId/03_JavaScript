function resetNumber() {
  const circleItems = document.querySelectorAll(".circle");

  for (let circle of circleItems) {
    circle.classList.remove("selected");
  }

  selectedNumbers.clear();
}


function createRandomNumber() {
  const ranNumInterval = setInterval(() => {
    resetNumber();

    const circleItems = document.querySelectorAll(".circle");

    while (selectedNumbers.size < 6) {
      const randomNum = Math.floor(Math.random() * 45) + 1;

      selectedNumbers.add(randomNum);
    }

    for (let number of selectedNumbers) {
      circleItems[number - 1].classList.add("selected");
    }
  }, 100);

  return ranNumInterval;
}


const createNumBtn = document.querySelector("#createNumBtn");
let isGenerating = false;

const selectedNumbers = new Set();

createNumBtn.addEventListener("click", () => {
  if (isGenerating) return;

  isGenerating = true;

  const ranNumInterval = createRandomNumber();

  createNumBtn.classList.add("is-generating");
  createNumBtn.innerHTML = "생성 중";

  setTimeout(() => {
    clearInterval(ranNumInterval);

    isGenerating = false;

    createNumBtn.classList.remove("is-generating");
    createNumBtn.innerHTML = "무작위 번호 생성";
  }, 2000);
});


const resetBtn = document.querySelector("#resetBtn");

resetBtn.addEventListener("click", () => {
  resetNumber();
});


const circleBtn = document.querySelectorAll(".circle");

for (let circle of circleBtn) {
  circle.addEventListener("click", () => {
    if (isGenerating) return;

    const number = Number(circle.innerHTML);

    if (circle.classList.contains("selected")) {
      circle.classList.remove("selected");
      selectedNumbers.delete(number);
      
      return;
    }

    if (selectedNumbers.size >= 6) {
      return;
    }

    circle.classList.add("selected");
    selectedNumbers.add(number);
  });
}
