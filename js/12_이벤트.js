/** 인라인 이벤트 모델, this 확인 */
function check1(div) {
  // console.log(div);
  // 클릭된 숫자를 버튼(div)에 출력
  // 1. 버튼에 작성된 내용 얻어오기
  const num = Number(div.innerText);

  // 2. 얻어온 내용이 숫자가 아닌 경우
  // isNaN(값);: 값이 NaN이면 참, 아니면 거짓 반환
  if(isNaN(num)) {
    div.innerText = 1;
    return;
  }

  // 3. 얻어온 내용이 숫자인 경우
  div.innerText = num + 1;
}

// 고전 이벤트 모델 확인
const testA = document.getElementById("testA"); // document.querySelector("#testA");

testA.onclick = function() { // testA 요소가 가지고 있는 onclick 변수(이벤트 리스너)에 함수(이벤트 핸들러)를 대입
  console.log(this); // 고전 이벤트 모델에서 this == testA(이벤트가 발생한 요소)
  alert("고전 이벤트 모델 확인")
};

// 고전 이벤트 모델 제거: #testB 버튼 클릭 시 #testA의 클릭 이벤트 핸들러 제거
const testB = document.getElementById("testB");

testB.onclick = function() {
  if(testA.onclick === null) {
    return;
  }

  testA.onclick = null; // testA가 클릭되었을 때의 동작(핸들러)을 null로 덮어씌움
  alert("확인 버튼 클릭 이벤트 핸들러 제거");
}

// 고전 이벤트 모델 단점 확인
const testC = document.getElementById("testC");

// onclick 이벤트 리스너에 이벤트 핸들러 대입
testC.onclick = function() {
  testC.style.backgroundColor = 'pink';
}

// onclick 이벤트 리스너에 이벤트 핸들러 다시 대입 -> 덮어씌움 -> 위에 작성한 함수 작동 안함
testC.onclick = function() {
  testC.style.fontSize = '40px';
}

// 표준 이벤트 모델
// 클릭할수록 투명 + 클릭 횟수 증가
const test1 = document.querySelector("#test1");

test1.addEventListener("click", function() { // click: 감지할 이벤트 종류, function(){}: 이벤트가 감지됐을 때 수행할 이벤트 핸들러
  let current = test1.style.opacity; // opacity: 불투명 정도를 설정하는 속성 -> 0에 가까울수록 투명, 1에 가까울수록 불투명
  console.log("현재 투명도: ", current); // 처음엔 빈칸

  if(current === "") {
    current = 1; // 불투명
  }

  // 투명도를 0.05 감소
  test1.style.opacity = current - 0.05;

  // 투명도가 0미만이 된 경우
  if(test1.style.opacity < 0) {
    test1.style.opacity = 1;
  }
});

// 클릭 시 숫자 1 증가
test1.addEventListener("click", function() { // 두번째 이벤트 리스너가 첫번째 이벤트 리스너와 같이 사용됨
  let num = Number(test1.innerText);

  test1.innerText = ++num;
});

// 버튼 배경색 변경, 클릭 시 #result2 배경색 변경
const btns = document.querySelectorAll(".btn-container>button");

const result2 = document.querySelector("#result2");

for(let i = 0; i < btns.length; i++) {
  btns[i].style.backgroundColor = btns[i].innerText;

  btns[i].addEventListener("click", function() {
    result2.style.backgroundColor = btns[i].innerText;
  })
}

// 실습 문제
const changeBtn = document.getElementById("changeBtn");
const display = document.querySelectorAll(".display");
const inputCol = document.querySelectorAll(".inputColor");

changeBtn.addEventListener("click", function() {
  for(let i = 0; i < display.length; i++) {
    display[i].style.backgroundColor = inputCol[i].value;
  }
});