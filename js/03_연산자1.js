// [중요] HMTL 문서에서 얻어온 값의 자료형은 무조건 string(문자열)

// 계산기 동작 코드
// 전역 변수(global) 선언
// document(HTML 문서).(점 연산자: 내부(하위) 접근 연산자)getElementById("input1");(id가 input1인 요소로부터 얻어올 것)
// id가 일치하는 요소를 가져와 변수에 저장하는 코드
const input1 = document.getElementById("input1"); 
const input2 = document.getElementById("input2"); 
const calcResult = document.getElementById("calcResult");

// 반복되는 선언을 전역 변수로 선언하면 안될까?
const test1 = Number(input1.value);
const test2 = Number(input2.value);
// 전역 변수는 페이지 로딩 시점에 해석되어 값이 결정됨, 따라서 input에 값이 입력되지 않은 상태에서 해석되므로 0이 됨

/** 더하기 함수 (DOC 주석: 함수 설명 작성용 주석) */
function plusFn() {
  // input1.value: #input1 요소에 작성된 값(string)을 얻어옴
  // Number()를 이용해 숫자형태 문자열을 숫자로 변환, 숫자형태가 아니면 NaN 반환
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  console.log("두 수의 합: ", value1 + value2);
  // 결과(#calcResult)의 내용(innerText)으로 출력
  calcResult.innerText = value1 + value2;
}

/** 빼기 함수 */
function minusFn() {
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  console.log("두 수의 차: ", value1 - value2);
  calcResult.innerText = value1 - value2;

  // 전역 변수 test1, test2 테스트
  console.log("전역 변수 두 수의 차: ", test1 - test2);
}

/** 곱하기 함수 */
function multiFn() {
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  console.log("두 수의 곱: ", value1 * value2);
  calcResult.innerText = value1 * value2;
}

/** 나누기 함수 */
function divFn() {
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  console.log("두 수의 몫: ", value1 / value2);
  calcResult.innerText = value1 / value2;
}

/** 나머지 함수 */
function modFn() {
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  console.log("두 수의 나머지: ", value1 % value2);
  calcResult.innerText = value1 % value2;
}

// 응용
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const calcResult2 = document.getElementById("calcResult2");

/** 두배 함수 */
function doubleFn() {
  const value = Number(input3.value);
  console.log("첫번째 수의 두 배: ", value * 2);
  calcResult2.innerText = value * 2;
}

/** 제곱 함수 */
function squareFn() {
  const value = Number(input4.value);
  console.log("두번째 수의 제곱: ", value * value);
  calcResult2.innerText = value * value;
}

/** 모든 산술연산 결과 일괄 출력 */
function allOperationFn() {
  const v1 = Number(input3.value);
  const v2 = Number(input4.value);

  // 각각의 연산 결과를 별도의 변수에 저장
  const plus = v1 + v2;
  const minus = v1 - v2;
  const multi = v1 * v2;
  const div = v1 / v2;
  const mod = v1 % v2;

  // 요소.innerText = "문자열"; 
  // -> <span>내용</span>: 내용 부분에 문자열 대입(출력)
  // -> HTML 코드를 해석하지 못함

  // 요소.innerHTML = "문자열"; 
  // -> <span>내용</span>: 내용 부분에 문자열 대입(출력)
  // -> HTML 코드를 해석할 수 있음

  calcResult2.innerHTML
  = "<ul>" 
  + "<li>+ 결과: " + plus + "</li>"
  + "<li>- 결과: " + minus + "</li>"
  + "<li>* 결과: " + multi + "</li>"
  + "<li>/ 결과: " + div + "</li>"
  + "<li>% 결과: " + mod + "</li>"
  + "</ul>"
}

// 증감 연산자를 활용한 1씩 증감하는 함수
const countResult = document.getElementById("countResult");

function increase() {
  // countResult에 작성된 내용 얻어오기
  let count = Number(countResult.innerText);
  // 얻어온 숫자를 1 증가 시킨 후 출력
  countResult.innerText = ++count;
}

function decrease() {
  let count = Number(countResult.innerText);
  countResult.innerText = --count;
}

// 연산이란?
// - 컴퓨터가 동작하기 위한 코드나 값을 읽고 실행하는 행위
// ex) +, -, *, /, %, ++, --, 변수에 값 대입, console 출력, innertext 등 전부

// 전/후위 연산 확인
function checkFn() {
  let num = 100;

  // 전위 연산: 다른 연산보다도 최우선으로 실행
  // num 값이 1 증가한 후 콘솔에 출력됨
  console.log("++num: ", ++num); // 101
  console.log("++num: ", ++num); // 102
  console.log("++num: ", ++num); // 103

  num = 100;
  // 후위 연산: 다른 연산들이 전부 실행된 후 마지막에 실행
  // num 값이 콘솔에 출력된 후 1 증가함
  console.log("num++ :", num++); // 100
  console.log("num++ :", num++); // 101
  console.log("num++ :", num++); // 102
  console.log("num 확인 :", num); // 103

  // 문제
  let a = 10;
  let b = 5;
  let c = ++a * b--;
  // 이 때 최종 a, b, c의 값은?
  // a: 11
  // b: 4
  // c: 55
  console.log(a, b, c);
}