const display = document.querySelector("#display");
const startBtn = document.querySelector("#startBtn");
const recordBtn = document.querySelector("#recordBtn");
const resetBtn = document.querySelector("#resetBtn");
const recordContainer = document.querySelector("#recordContainer");

// [0]:분, [1]:초, [2]:1/100초
const timeList = document.querySelectorAll("#display>span");

let count = 0;

let currentInterval; // START 버튼 클릭 시 수행되는 setInterval() 저장 변수

startBtn.addEventListener("click", () => {
  if(startBtn.innerHTML === "PAUSE") {
    startBtn.innerHTML = "START";
    recordBtn.disabled = true;

    // setInterval()을 삭제: clearInterval();
    clearInterval(currentInterval);

    return;
  }

  startBtn.innerHTML = "PAUSE"; // 일시정지 버튼으로 변경
  recordBtn.disabled = false;

  currentInterval = setInterval(() => {
    count++;

    displayOutput();
  } , 10);
});

resetBtn.addEventListener("click", () => {
  startBtn.innerHTML = "START";
  recordBtn.disabled = true;
  recordContainer.innerHTML = "";

  clearInterval(currentInterval);

  count = 0;

  displayOutput();
});

/** 전달받은 수가 10미만이면 앞에 0을 붙여 반환하는 함수
 * @param num: 숫자
 */
function attachZero(num) {
  if(num < 10) {
    return "0" + num;
  } else {
    return num + "";
  }
}

/** 시계화면 출력 함수 */
function displayOutput() {
  // 화면에 출력될 시간 계산 후 변수에 저장
  const minute = attachZero(Math.floor(count / 100 / 60));
  const second = attachZero(Math.floor(count / 100 % 60));
  const ms = attachZero(count % 100);

  if(minute !== timeList[0].innerHTML) {
    timeList[0].innerHTML = minute
  }

  if(second !== timeList[1].innerHTML) {
    timeList[1].innerHTML = second
  }

  timeList[2].innerHTML = ms;
}

recordBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  
  li.innerText = display.innerText;

  recordContainer.append(li);
});

/* 
  cleatInterval() 사용 방법

  1. setInterval() 수행 후 반환되는 값을 변수에 대입
    - const currentInterval = setInterval();

  2. clearInterval(변수명) 수행
    - clearInterval(currentInterval);

  3. setInterval() 동작 멈춤
*/