// 전달 인자, 매개 변수 확인
const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

/** 전달받은 값의 양수/음수/0 판별 @param num: 전달받은 값 */
function testFn1(num) {
  let str = "";

  if(num === 0) {
    str = "0";
  } else if(num > 0) {
    str = "양수";
  } else {
    str = "음수";
  }

  alert(`${num}은/는 ${str}입니다.`);
}

// #btn1이 클릭되었을 때
btn1.addEventListener("click", function() {
  const inputNum = Number(input1.value);

  // 함수 호출 (입력 값 전달)
  testFn1(inputNum);
});

/** 입력받은 수 3개(배열)의 합 @param arr: 숫자만 저장된 1차원 배열 */
function sumArr(arr) {
  let sum = 0;

  for(let i of arr) {
    sum += i;
  }

  alert(`합계: ${sum}`);
}

const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", function() {
  const inputNums = document.querySelectorAll("[name = input2]");
  const arr = [];

  for(let inputNum of inputNums){
    // 배열.push(값): 값을 배열 마지막 요소로 추가
    arr.push(Number(inputNum.value));
  }

  sumArr(arr);
});

/** 배수 확인 함수 @param a: 비교되는 수 (큰 수) @param b: 확인해야되는 수 (작은 수) */
function multipleFn(a, b) {
  let str = "";

  if(a % b === 0) {
    str = "맞습니다.";
  } else {
    str = "아닙니다.";
  }

  alert(`${a}은/는 ${b}의 배수가 ${str}`);
}

const btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", function() {
  const inputNums = document.querySelectorAll("[name = input3]");

  let a = Number(inputNums[0].value);
  let b = Number(inputNums[1].value);

  multipleFn(a, b);
});

/** 리턴 확인: num의 x제곱 값을 반환하는 함수 @param num: 곱해질 정수 @param x: 지수 @return: num의 x제곱 */
function pow(num, x) {
  let result = 1;

  for(let i = 0; i < x; i++) {
    result *= num;
  }

  return result; // 함수 종료하고 호출한 곳으로 result를 가지고 돌아감
}

/** 제곱의 결과를 문자열로 변환하여 반환하는 함수 @param num @param x @param result: num의 x제곱 @return: "num의 x제곱은 result입니다."*/
function createStr(num, x, result) {
  return `${num}의 ${x}제곱은 ${result}`;
}

const btn4 = document.querySelector("#btn4");

btn4.addEventListener("click", function() {
  const num = Number(prompt("정수 입력"));
  const x = Number(prompt("지수 입력"));

  alert(createStr(num, x, pow(num, x)));
});

/** 프롬프트에 입력된 값을 숫자 배열로 바꿔 반환하는 함수 @param num: 입력받을 수의 개수 @return arr: 입력받은 수가 저장된 배열 */
function createArray(num) {
  const arr = [];
  
  for(let i = 0; i < num; i++) {
    const val = Number(prompt(`인덱스[${i}]에 대입할 숫자`));
    arr.push(val); // 배열 마지막 요소로 val 추가
  }

  return arr;
}

const btn5 = document.querySelector("#btn5");

btn5.addEventListener("click", function() {
  const arr = createArray(5); // 생성된 배열을 반환받아 저장

  sumArr(arr); // 합계 출력 함수 호출
});

// 함수를 반환하는 함수
function createCounter() {
  let count = 0;

  const fn = function(){
    count++;
    return count;
  }

  return fn; // 함수를 반환
}

const btn6 = document.querySelector("#btn6");

btn6.addEventListener("click", function() {
  const counter = createCounter(); // 함수명 == counter

  console.log(counter());
  console.log(counter());
  console.log(counter());
  console.log(counter());
  console.log(counter());
});

// Closure: 외부 함수에 서 종료된 내부 함수에 선언된 변수를 사용하는 기술
// - 특징 1. 데이터 은닉(private): 외부에서 직접 접근할 수 없는 상태의 변수를 만들 수 있음
// - 특징 2. 상태 유지: 외부에서 함수를 수행한 후에도 내부 함수의 변수값이 변한 상태로 유지

// 매개 변수/리턴으로 익명 함수 전달
const btn7 = document.querySelector('#btn7');

btn7.addEventListener("click", function() {
  const resultFn = testFn7(function(a, b) {return a + b});

  console.log(resultFn(3)); // 90;
});

function testFn7(otherFn) {
  return function(num) {
    return otherFn(10, 20) * num
  }
}

// 화살표 함수
const arrows = document.querySelectorAll(".arrow");

arrows[0].addEventListener("click", () => {
  /** 전달 받은 값 3개의 합을 반환하는 함수 */
  const sumFn = (a, b, c) => {
    return a + b + c;
  }

  alert(sumFn(50, 99, 1234));
});

arrows[1].addEventListener("click", () => {
  /** 제곱 반환 */
  const square = num => { // 매개 변수가 하나라 소괄호 생략
    return num * num;
  }

  alert(square(999));
});

arrows[2].addEventListener("click", () => {
  const print = str => console.log(str); // 블록 내 내용이 한줄이라 중괄호 생략

  print("안녕하세요?");

  const doubleFn = num => num * 2; // 리턴과 소괄호 중괄호 전부 생략

  print(doubleFn(3));
});

arrows[3].addEventListener("click", () => {
  const fn1 = () => [1, 2, 3];
  console.log(fn1());

  // {k:v, k:v} === JS 객체
  const fn2 = () => {return {name: "홍길동", age: 20};};
  console.log(fn2());
});

// 익명 함수 기본형의 this 확인
document.querySelector("#btn8").addEventListener("click", function() {
  console.log(this); // 이벤트가 발생한 요소
});

// 화살표 함수의 this 확인
document.querySelector("#btn9").addEventListener("click", () => {
  console.log(this); // === window객체
});

// window 객체란?: 브라우저(창) 자체를 나타내는 객체, 브라우저 관련 기능을 제공(alert, prompt, setTimeout, setInterval, open 등)

const str = "A"; // 전역 변수
  console.log(str); // A

  (function() {
    const str = "B"; // 블록 내 지역 변수

    console.log(str); // B
  })();