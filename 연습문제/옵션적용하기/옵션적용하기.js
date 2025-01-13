const widthInput = document.querySelector(".widthInput");
const heightInput = document.querySelector(".heightInput");
const textSizeInput = document.querySelector(".textSizeInput");
const textWeight = document.querySelectorAll("[name = textWeight]");
const textColorInput = document.querySelector(".textColorInput");
const backgroundColorInput = document.querySelector(".backgroundColorInput");
const rowAlign = document.querySelectorAll("[name = rowAlign]");
const colAlign = document.querySelectorAll("[name = colAlign]");
const printText = document.querySelector(".printText");
const applyButton = document.querySelector("#applyButton");
const printArea = document.querySelector(".printArea");

applyButton.addEventListener("click", function() {
  // 너비
  printArea.style.width = widthInput.value + "px";

  // 높이
  printArea.style.height = heightInput.value + "px";

  // 폰트 크기
  printArea.style.fontSize = textSizeInput.value + "px";

  // 폰트 굵기 미작동
  

  // 폰트색
  printArea.style.color = textColorInput.value;

  // 배경색
  printArea.style.backgroundColor = backgroundColorInput.value;

  // 가로 정렬 미작동


  // 세로 정렬 미작동


  // 출력 내용
  printArea.innerText = printText.value;


});