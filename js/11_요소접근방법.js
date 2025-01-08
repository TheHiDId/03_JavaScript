/* 
  JS 이용 CSS 변경법
  * 요소.style.css속성 = 값
  -> inline 스타일로 CSS가 추가됨 (시작 태그에 작성됨)
*/

/** class를 이용한 요소(DOM 객체) 접근 */
function classTest() {
  // 클래스 속성값이 cls-test인 요소를 모두 얻어와 유사 배열 형태로 반환
  // 유사 배열이란?: 배열처럼 index, length를 제공하지만 배열 전용 함수(메서드)를 제공하지 않음
  const divs = document.getElementsByClassName("cls-test");
  console.log(divs);

  // divs에 저장된 요소를 하나씩 순서대로 접근(순차 접근)
  for(let i = 0; i < divs.length; i++) {
    // 각 요소에 작성된 내용 얻어와 콘솔에 출력
    console.log(divs[i].innerText);

    // 각 요소에 배경색을 작성된 내용으로 변경
    divs[i].style.backgroundColor = divs[i].innerText;
  }
}

/** 배경색 초기화 */
function classInit() {
  const divs = document.getElementsByClassName("cls-test");

  for(let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "white";
  }
}

/** input에 입력된 숫자를 모두 얻어와 합계 구하기 */
function classTest2() {
  const inputNum = document.getElementsByClassName("cls-input") // 값을 여러개 넣어 자동으로 배열로 선언
  let sum = 0;

  for(let i = 0; i < inputNum.length; i++) {
    // 각 요소에 작성된 값을 얻어와 number 타입으로 변환하여 sum에 누적
    sum += Number(inputNum[i].value);
  }

  document.getElementById("sumResult").innerText = sum;
}

/** 태그명으로 요소 접근하여 배경색 변경 */
function tagNameTest() {
  // 문서 내에 존재하는 모든 li 태그 선택
  const lists = document.getElementsByTagName("li");

  for(let i = 0; i < lists.length; i++) {
    // 각 요소에 저장된 값을 얻어와 rgb 변경에 이용
    const num = Number(lists[i].innerText); // li 요소에 작성된 내용을 얻어와 숫자로 변환

    lists[i].style.backgroundColor = `rgb(240, 0, ${20 * num})`;
  }
}

/** 취미 선택 */
function nameTest() {
  const hobbyList = document.getElementsByName("hobby");

  let content = ""; // 화면에 출력할 내용 누적
  let count = 0; // 체크된 체크박스의 갯수를 세기 위한 변수

  for(let i = 0; i < hobbyList.length; i++) {
    if(hobbyList[i].checked === true) {
      console.log(hobbyList[i].value);

      count++;

      content += hobbyList[i].value + " ";
    }
  }

  content += `<br><br>선택된 취미 개수: ${count}`;

  const div = document.getElementsByClassName("name-result")[0]; // 배열(또는 유사 배열)은 .innerText를 제공하지 않으므로 내부 요소인 [0]만 선택하는 것

  div.innerHTML = content;
}