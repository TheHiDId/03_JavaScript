/* 
  [템플릿 문자열]
  - `(백틱)을 이용한 문자열 + 변수/값 혼합 작성을 쉽게 할 수 있게 해주는 방법
  - 문자열 전체를 ``으로 감싸고 변수/값이 들어가야되는 부분에는 ${변수명/값} 형태로 작성
  ex) const num = 10;
      console.log(`num에 저장된 값은 ${num} 입니다.`)
      출력 : num에 저장된 값은 10 입니다.
*/

/** 비교 연산자 확인 */
function check1() {
  const num1 = 100;
  const num2 = 100;
  const num3 = 999;

  const str1 = "100";
  const str2 = "100";
  const str3 = "999";

  console.log("동등 동일 비교 확인");
  console.log("1. 동등 비교(==, !=)");
  console.log("num1 == num2: ", num1 == num2); // true
  console.log("num1 == num3: ", num1 == num3); // false
  console.log("num1 != num3: ", num1 != num3); // true
  // number와 string 동등 비교
  console.log("num1 == str1: ", num1 == str1); // true
  // string끼리 동등 비교
  console.log("str1 == str2: ", str1 == str2); // true
  console.log("str1 == str3: ", str1 == str3); // false

  console.log("2. 동일 비교(===, !==)");
  console.log("num1 === num2: ", num1 === num2); // true
  console.log("num1 === num3: ", num1 === num3); // false
  console.log("num1 !== num3: ", num1 !== num3); // true
  // number와 string 동일 비교
  console.log("num1 === str1: ", num1 === str1); // false -> 자료형이 달라 동일 비교에서 false
  // string끼리 동일 비교
  console.log("str1 === str2: ", str1 === str2); // true
  console.log("str1 === str3: ", str1 === str3); // false

  //초과, 미만, 이상, 이하
  console.log("num1 > num2: ", num1 > num2); // false
  console.log("num1 >= num2: ", num1 >= num2); // true
}

/** 홀짝 판별기 */
function oddEvenCheck() {
  const input1 = document.getElementById("input1");
  // #input1에 작성된 값을 얻어와 number 타입으로 변환해 변수에 저장
  const val = Number(input1.value);
  console.log("짝수 맞음? " + ( val % 2 === 0 )); 
  console.log("홀수 맞음? " + ( val % 2 === 1 )); 
}

/** 배수 판별기 */
function multipleCheck() {
  // 배수 판별기에 사용되는 요소를 모두 가져와 변수에 저장
  const input2 = document.getElementById("input2");
  const input3 = document.getElementById("input3");
  const result2 = document.getElementById("result2");
  // 입력받은 값을 숫자 타입으로 변환
  const val1 = Number(input2.value);
  const val2 = Number(input3.value);
  // #result2 요소의 내용으로 결과 대입(출력)
  result2.innerText = val1 % val2 === 0;
}

/** 복합 대입 연산 확인 */
function compoundCheck() {
  let num = 100;
  console.log(`num 초기값: ${num}`); // 100
  num += 20; // num = num + 20;
  console.log(`num += 20: ${num}`); // 120
  num -= 60; // num = num - 60;
  console.log(`num -= 60: ${num}`); // 60
  num *= 3; // num = num * 3;
  console.log(`num *= 3: ${num}`); // 180
  num /= 10; // num = num / 10;
  console.log(`num /= 10: ${num}`); // 18
  num %= 5; // num = num % 5;
  console.log(`num %= 5: ${num}`); // 3
}

/** AND 연산자 확인 */
function andCheck() {
  // 104는 100이상의 숫자이면서 짝수인가?
  const bool1 = 104 >= 100 && 104 % 2 === 0; // true
  console.log(`104는 100이상의 숫자이면서 짝수인가? ${bool1}`);
  // 50은 70이하의 숫자이면서 4의 배수인가?
  const bool2 = 50 <= 70 && 50 % 4 === 0; // false
  console.log(`50은 70이하의 숫자이면서 4의 배수인가? ${bool2}`)
  // 13은 1부터 10사이의 숫자가 맞는가?
  const bool3 = 13 >= 1 && 13 <= 10; // false
  console.log(`13은 1부터 10사이의 숫자가 맞는가? ${bool3}`)
}

/** OR 연산자 확인 */
function orCheck() {
  // 4는 10을 초과하거나 짝수인가?
  const bool1 = 4 > 10 || 4 % 2 === 0; // true
  console.log(`4는 10을 초과하거나 짝수인가? ${bool1}`)
  // 나이가 18세 미만이거나 이름이 홍길동인가?
  const age = 20;
  const name = "홍길동";
  const bool2 = age < 18 || name === "홍길동"; // true
  console.log(`나이가 18세 미만이거나 이름이 홍길동인가? ${bool2}`)
  // 국어 또는 영어 점수가 40점 미만이거나 평균이 60점 미만인가?
  const kor = 50;
  const eng = 75;
  const avg = ( kor + eng ) / 2;
  const bool3 = ( kor < 40 || eng < 40 ) || avg < 60; // false
  console.log(`국어 또는 영어 점수가 40점 미만이거나 평균이 60점 미만인가? ${bool3}`)
}