// 계산
const calc = document.querySelector("#calc");

calc.addEventListener("click", () => {
  const inputNums = document.querySelectorAll(".input-number");

  let sum = 0;

  for(let num of inputNums) {
    sum += Number(num.value);
  }

  alert(`합계: ${sum}`);
});

// 추가
const add = document.querySelector("#add");
const container = document.querySelector(".container");

add.addEventListener("click", () => {
  // 추가 버튼 클릭 시, div, input, span 요소를 만들어 알맞게 조립 후 .container의 마지막 자식으로 추가
  const div = document.createElement("div");
  div.className = "row";

  const input = document.createElement("input");
  input.className = "input-number";
  input.type = "number";

  const span = document.createElement("span");
  span.className = "remove-row";
  span.innerHTML = "&times;"
  
  // 제거
  span.addEventListener("click", e => {
    e.target.parentElement.remove(); // 한 줄 제거
  });

  div.append(input, span);

  container.append(div);
});