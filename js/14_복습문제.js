const colorBoxes = document.querySelectorAll(".box");
const inputColors = document.querySelectorAll(".color-input");

document.addEventListener("keyup", function() {
  for(let i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].style.backgroundColor = inputColors[i].value;
  }
});

const opacityBtns = document.getElementsByName("opacity-btn"); // const opacityBtn = document.querySelectorAll("[name = opacity-btn]");

// 내 풀이
// for(let i = 0; i < opacityBtns.length; i++) {
//   opacityBtns[i].addEventListener("change", function() {
//     for(let j = 0; j < colorBoxes.length; j++) {
//       colorBoxes[j].style.opacity = opacityBtns[i].value;
//     }
//   });
// }

// 강사님 답안
for(let i = 0; i < opacityBtns.length; i++) {
  opacityBtns[i].addEventListener("change", function(e) {
    // 향상된 for문: 배열에 저장된 모든 요소를 순차 접근하는 용도의 for문
    // for of: for(let 변수명 of 배열명) {};: for문이 반복될 때 마다 배열 내 요소를 0번부터 하나씩 꺼내서 of 앞 변수에 대입하는 for문
    for(let j of colorBoxes) {
      j.style.opacity = e.target.value;
    }
  });
}

// 비교: 기본적으로 구조는 같지만 e와 for of문 활용으로 더 간단히 작성됨