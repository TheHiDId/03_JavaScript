/** 양수인지 검사 */
function check1() {
  // id가 "input1"인 요소를 얻어와 in1 상수에 저장
  const in1 = document.getElementById("input1")
  // id가 "input1"인 요소에 작성된 값을 얻어와 숫자로 변환하여 val 상수에 저장
  const val = Number(in1.value);
  if(val > 0) {
    alert(`${val}은/는 양수입니다!`); 
  } else {
    alert(`${val}은/는 양수가 아닙니다!`);
  }
}

/** 1 ~ 100 사이의 난수를 발생시켜 홀/짝 판별 */
function check2() {
  // 난수 발생: Math.random() -> 0보다 크거나 같고 1보다 작은 난수 발생
  // const randomNum = parseInt(Math.random() * 100 + 1);
  const randomNum = Math.floor(Math.random() * 100 + 1);
  if(randomNum % 2 === 0) {
    alert(`${randomNum}은/는 짝수입니다!`)
  } else {
    alert(`${randomNum}은/는 홀수입니다!`)
  }
}

/** 양수, 음수, 0 판별 */
function check3() {
  const input3 = document.getElementById("input3");
  const val = Number(input3.value);
  let result; // 결과를 저장할 변수를 선언 (undefined)
  // 양음수0 판별
  if(val > 0) {
    result = "양수";
  } else if(val < 0) {
    result = "음수";
  } else {
    result = "0";
  }
  // if / else if / else 모두 리설트에 대입 코드가 작성되어 있으므로 무조건 값을 가짐
  alert(`${val}은/는 ${result}입니다!`)
}

/** 어린이, 청소년, 성인 구분 */
function ageCheck() {
  const inputAge = document.getElementById("inputAge");
  const age = Number(inputAge.value);
  let result;

  function alertGeneration() { alert(`당신은 ${result}입니다!`); }

  if(age >= 0 && age <= 13) {
    result = "어린이";
    alertGeneration();
  } else if(age >= 14 && age <= 19) {
    result = "청소년";
    alertGeneration();
  } else if(age >= 20 && age <= 120) {
    result = "성인";
    alertGeneration();
  } else {
    alert("잘못된 값을 입력하셨습니다!");
  }
}

/** 어린이, 청소년, 성인 구분 2 */
function ageCheck2() {
  const inputAge = document.getElementById("inputAge");
  const age = Number(inputAge.value);
  let result;

  function alertGeneration() { alert(`당신은 ${result}입니다!`); }

  if(age < 0 || age > 120) {
    alert("잘못된 값을 입력하셨습니다!");
  } else if(age <= 13) {
    result = "어린이";
    alertGeneration();
  } else if(age <= 19) {
    result = "청소년";
    alertGeneration();
  } else {
    result = "성인";
    alertGeneration();
  }
}

/** 배수 판별과 Early Return */
function check4() {
  // id가 inputA, inputB인 요소를 얻어와 변수에 저장
  const inputA = document.getElementById("inputA");
  const inputB = document.getElementById("inputB");

  // 1. A, B 중 하나라도 입력되지 않을 경우 -> "입력되지 않은 값이 존재합니다." 출력
  // "string".length: 문자열의 길이 반환
  if(inputA.value.length === 0 || inputB.value.length === 0) {
    alert("입력되지 않은 값이 존재합니다.");
    return; // 함수를 즉시 종료하고 호출한 곳으로 돌아감 -> 함수를 수행할 수 없는 상태이므로 미리 종료
  }
  // 위 if문을 건너뛰었다는 것은 값이 둘 다 입력되었다는 뜻

  const v1 = Number(inputA.value);
  const v2 = Number(inputB.value);

  // 2. A가 B보다 작을 경우 -> "A가 B보다 작습니다" 출력
  if(v1 < v2) {
    alert("A가 B보다 작습니다.");
    return;
  }
  // 위 if문을 건너뛰었다는 것은 A, B가 전부 입력되고 A가 B보다 크거나 같은 상태라는 뜻

  // 3. A가 B보다 클 경우 -> 배수 판별 수행
  if(v1 % v2 === 0) {
    alert(`${v1}은 ${v2}의 배수가 맞습니다.`);
    return;
  }
  // 위 if문을 건너뛰었다는 것은 A가 B의 배수가 아니라는 뜻

  alert(`${v1}은 ${v2}의 배수가 아닙니다.`);
}

/** 입력된 수가 3, 4, 5가 맞는지 확인 */
function check5() {
  const input5 = document.getElementById("input5");

  // 입력된 값이 없을 경우 
  if(input5.value.length === 0) {
    alert("숫자를 입력하세요.");
    return;
  }

  let result; // 결과 저장용 변수
  switch(Number(input5.value)) {
    case 3: result = "3이 입력되었습니다."; break;
    case 4: result = "입력된 숫자는 4입니다."; break;
    case 5: result = "5를 입력하셨습니다."; break;
    default: result = "3, 4, 5가 아닌 다른 숫자가 입력되었습니다."
  }
  alert(result);

  // switch문 -> if else문으로 변경
  let result2;
  if(Number(input5.value) === 3) {
    result2 = "3이 입력되었습니다."
  } else if(Number(input5.value) === 4) {
    result2 = "입력된 숫자는 4입니다."
  } else if(Number(input5.value) === 5) {
    result2 = "5를 입력하셨습니다."
  } else {
    result2 = "3, 4, 5가 아닌 다른 숫자가 입력되었습니다."
  }
  alert(result2);
}

// 매개변수(Parameter): 함수가 호출될 때 전달된 값(Argument)을 저장하기 위한 변수
/** switch문을 이용한 계산기 */
function calc(op) {
  console.log("매개변수 op 확인: ", op, typeof op);

  // 숫자가 입력되는 input요소 얻어와 변수에 저장
  const number1 = document.getElementById("number1");
  const number2 = document.getElementById("number2");

  //숫자가 둘 중 하나라도 입력되지 않은 경우
  if(number1.value.length === 0 || number2.value.length === 0) {
    alert("숫자를 모두 입력하세요.");
    return; // 함수 종료
  }

  // number 타입을 입력받은 값 변경
  const n1 = Number(number1.value);
  const n2 = Number(number2.value);

  // 전달받은 매개변수 값에 따라 다른 연산을 수행
  let result;
  switch(op) {
    case '+': result = n1 + n2; break;
    case '-': result = n1 - n2; break;
    case '*': result = n1 * n2; break;
    case '/': result = n1 / n2; break;
    case '%': result = n1 % n2; break;
    default: result = "잘못된 연산자";
  }
  
  // 결과를 #calcResult 요소의 내용으로 출력
  document.getElementById("calcResult").innerText = result;
}

/** 입력받는 월(달)의 알맞은 계절 출력(break; 관련 예제) */
function check6() {
  const input6 = document.getElementById("input6");

  if(input6.value.length === 0) {
    alert("월(달)을 입력하세요."); 
    return;
  }

  // break(멈춤): 현재 case까지만 해석하고 switch문을 멈춤 -> 미작성 시 멈추지 않고 다음 case를 연달아서 수행 
  let result;
  switch(Number(input6.value)) {
    case 3: case 4: case 5: result = "봄"; break;
    case 6: case 7: case 8: result = "여름"; break;
    case 9: case 10: case 11: result = "가을"; break;
    case 12: case 1: case 2: result = "겨울"; break;
    default: result = "잘못 입력하셨습니다."
  }
  alert(result);
}