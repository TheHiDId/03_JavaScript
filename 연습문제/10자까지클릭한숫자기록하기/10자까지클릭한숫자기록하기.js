const boxes = document.querySelectorAll(".box");
const clickedNum = document.querySelector(".clickedNum");
const reset = document.querySelector(".reset");

for(let box of boxes) {
  box.addEventListener("click", () => {
    if(clickedNum.innerText.length >= 10) {
      alert("10개까지만 입력할 수 있습니다!")
      return;
    }
  
    clickedNum.innerText += box.innerText;
  });
}

reset.addEventListener("click", () => {
  clickedNum.innerText = "";
});