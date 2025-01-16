const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
  const input1 = document.querySelector("#input1");

  console.log("input의 name 속성값: ", input1.getAttribute("name"));

  input1.setAttribute("type", "checkbox"); // type 속성을 추가하고 속성값을 checkbox로 설정

  input1.setAttribute("class", "big"); // JS 속성 설정 방법 중 class관련 + CSS의 class 기반 설계를 이용해서 HTML 요소의 스타일을 변경할 수 있음

  input1.setAttribute("type", "number"); // 덮어씌움

  input1.setAttribute("class", "bg-skyblue"); // 덮어씌움

  input1.removeAttribute("class"); // 속성 제거

  if(!input1.hasAttribute("placeholder")) { // placeholder 속성이 없을 때
    input1.setAttribute("placeholder", "placeholder 추가됨")
  } else {
    input1.removeAttribute("placeholder");
  }
});


const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
  // 브라우저 콘솔에서 특정 요소가 가지고 있는 DOM 속성을 직접 확인하고 싶을 경우 복수 형태로 요소를 얻어오는 구문을 이용

  const inputs = document.querySelectorAll("#input2");
  const divs = document.querySelectorAll("#div2");

  console.log(inputs);
  console.log(divs);

  console.log(inputs[0].getAttribute("id"));
  console.log(inputs[0].id); // 두 줄은 결과가 같음

  console.log("#input2의 name: ", inputs[0].getAttribute("name"));
  console.log("#input2의 name: ", inputs[0].name);
  console.log("#div2의 name: ", divs[0].name); // 정의되지 않음

  console.log("#input2의 value: ", inputs[0].getAttribute("value"));
  console.log("#input2의 value: ", inputs[0].value);
  console.log("#div2의 value: ", divs[0].value); // 정의되지 않음
});


const btnContainer = document.querySelector(".btn-container");
const addBtn = document.querySelector("#addBtn");
const closeBtn = document.querySelector("#closeBtn");

addBtn.addEventListener("click", () => {
  if(btnContainer.classList.contains("hidden")) {
    btnContainer.classList.remove("hidden");

    addBtn.classList.add("hidden");
  }
});

closeBtn.addEventListener("click", () => {
  if(!btnContainer.classList.contains("hidden")) {
    btnContainer.classList.add("hidden");

    addBtn.classList.remove("hidden");
  }
});


// 클래스를 이용한 CSS 스타일 제어방법이 가장 많이 사용됨
// 다만 우선순위를 따질 때 인라인 스타일을 사용할 때도 있음

// 인라인 스타일
// addBtn.addEventListener("click", () => {
//   const container3 = document.querySelector(".container-3")

//   container3.style.backgroundColr = "pink";
//   container3.style.border = "5px double red";
//   container3.style.width = "300px";
//   container3.style.height = "150px";
// });

// 클래스 이용
addBtn.addEventListener("click", () => {
  const container3 = document.querySelector(".container-3");

  container3.classList.add("test");
});


const container3 = document.querySelector(".container-3");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const color = btn.textContent;
    const classExist = container3.classList.contains(`bg-${color}`);

    container3.removeAttribute("class");

    container3.classList.add("container-3");

    if(!classExist) {
      container3.classList.toggle(`bg-${color}`);
    }
  });
});


const modifyBtn = document.querySelector("#modifyBtn");

modifyBtn.addEventListener("click", () => {
  if(modifyBtn.classList.contains("bg-green")) {
    modifyBtn.classList.replace("bg-green", "bg-red")
  } else {
    modifyBtn.classList.replace("bg-red", "bg-green")
  }
});