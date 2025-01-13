const inputNum = document.querySelector(".inputNum");
const createBtn = document.querySelector(".createBtn");
const plusBtn = document.querySelector(".plusBtn");
const result = document.querySelector(".result");
const container = document.querySelector("#container");

createBtn.addEventListener("click", () => {
  const rows = document.querySelectorAll(".row");

  for(let row of rows) {
    row.remove();
  }

  for(let i = 1; i <= Number(inputNum.value); i++) {
    const div = document.createElement("div");
    div.className = "row";

    const input = document.createElement("input");
    input.type = "number";
    input.className = "inputVal";

    div.append(input);

    container.append(div);
  }
});

plusBtn.addEventListener("click", () => {
  const inputVal = document.querySelectorAll(".inputVal");
  
  let sum = 0;

  for(let val of inputVal){
    sum += Number(val.value);
  }
  
  result.innerText = `결과: ${sum}`;
});