// 외부에 작성된 .js 파일

// console.log(): 개발자 도구 콘솔에 () 내부 내용을 기록(출력)
console.log("01_JS개요.js 파일이 연결됨");

// document: HTML 문서
// querySelector: CSS 선택자를 이용해 요소 선택
// const body: 선택된 요소를 저장해서 JS에서 body라고 부르기로 선언
const body = document.querySelector("body");

//라이트 모드
function lightMode() {
  body.style.backgroundColor = "white"; // 바디 배경색 흰색
  body.style.color = "black"; // 바디 텍스트색 검정색
}

//다크 모드
function darkMode() {
  body.style.backgroundColor = "black"; // 바디 배경색 흰색
  body.style.color = "white"; // 바디 텍스트색 검정색
  
  // JS를 이용해서 CSS를 변경하면 inline-style로 적용됨
}