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