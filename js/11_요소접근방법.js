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

/** CSS 선택자를 이용한 요소 접근 */
function cssTest() {
  // target-div의 속성값이 css-div인 요소 하나 선택
  const container = document.querySelector("[target-div = css-div]");
  console.log(container);

  container.style.width = "200px";
  container.style.height = "200px";
  container.style.border = "10px solid orange";
  
  // document.quertSelector("CSS 선택자");: 여러 요소가 선택된 경우 첫번째 요소만 얻어옴

  const first = document.querySelector("[target-div = css-div]>div");
  console.log(first); // 선택자는 2개를 선택했지만 첫번째 요소만 선택된 모습
  first.style.color = "red";
  first.style.fontSize = "30px";

  // target-div의 속성값이 css-div인 요소 전부 선택해서 유사 배열 형태로 반환
  const divs = document.querySelectorAll("[target-div = css-div]>div");
  console.log(divs);

  const colors = ['yellow', 'pink']; // 배열 선언 및 초기화

  for(let i = 0; i < divs.length; i++) {
    divs[i].style.height = '50%';
    divs[i].style.display = 'flex';
    divs[i].style.justifyContent = 'center';
    divs[i].style.alignItems = 'center';
    divs[i].style.backgroundColor = colors[i];
  }
}

/** 카카오톡 모양의 채팅화면 */
function readValue() {
  const chatBg = document.querySelector("#chattingBg")
  const chatInput = document.querySelector("#userInput")

  // 1. 입력값이 없을 때, 입력값이 공백 밖에 없을 때
  //    - 문자열.trim(): 문자열 좌우 공백 제거
  if(chatInput.value.trim().length === 0) {
    alert("채팅을 입력하세요.");
    chatInput.value = "";
    chatInput.focus();
    return;
  }

  // 2. 입력값을 읽어와 채팅 화면에 누적
  chatBg.innerHTML += `<p><span>${chatInput.value}</span></p>`;
  chatInput.value = "";
  chatInput.focus();

  // 3. 채팅 화면의 스크롤을 제일 아래로 이동
  //  - 요소.scrollHeight;: 스크롤 되어 가려진 부분까지 포함한 요소 전체 높이 반환
  //  - 요소.scrollTop;: 스크롤 제일 위에서부터 현재 위치 반환
  //  - 요소.scrollTop = "값";: 스크롤을 지정한 값만큼 위에서부터 떨어진 위치로 이동시킴
  chatBg.scrollTop = chatBg.scrollHeight;
}

// #userInput인 요소에 엔터 키 입력 기능 추가
document.querySelector("#userInput").addEventListener("keydown", function(e){
  // console.log(e.key);
  if(e.key === "Enter") {
    readValue();
  }
});