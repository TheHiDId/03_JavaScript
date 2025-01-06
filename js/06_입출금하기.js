// 잔액이 출력되는 span요소
const output = document.getElementById("output");
// 금액이 입력되는 input요소
const amount = document.getElementById("amount");
// 잔액을 기록할 변수 (초기값 10000)
let balance = 10000;
//비밀번호 저장 변수 (초기값 "1234")
const password = "1234";

// 함수 내부에 작성되지 않은 코드 -> HTML 페이지 렌더링 시 스크립트 파일이 전체 해석되면서 같이 해석/수행 됨
output.innerText = balance; // 잔액 초기 값 출력
amount.value = ""; // input 태그의 value값을 ""으로 변경

/** 연습용 출금 버튼 */
function test() {
  // prompt("내용")
  // - 알림창에 값을 입력할 수 있는 형태
  // - 확인 클릭 : 입력된 값 반환
  // - 취소 클릭 : null 반환
  const pw = prompt("비밀번호를 입력하세요.");
  console.log("pw: ", pw);

  // 취소 버튼 클릭 시
  if(pw === null) {
    alert("비밀번호 입력 취소 됨");
    return;
  }

  // 비밀번호가 틀렸을 때
  if(pw !== password) {
    alert("비밀번호가 일치하지 않음");
    return;
  }
  
  alert("출금 기능 수행");
}

/** 입금 함수 */
function deposit() {
  if(amount.value.length === 0) {
    alert("입금할 금액을 입력하세요.");
    return;
  }

  output.innerText = (balance += Number(amount.value));
  amount.value = "";
}

/** 출금 함수 */
function withdrawal() {
  if(amount.value.length === 0) {
    alert("출금할 금액을 입력하세요.");
    return;
  }

  const pw = prompt("비밀번호 입력");

  if(pw === null) {
    alert("비밀번호 입력이 취소되었습니다.");
    amount.value = "";
    return;
  }

  if(pw !== password) {
    alert("비밀번호가 일치하지 않습니다.");
    amount.value = "";
    return;
  }

  if(amount.value > balance) {
    alert("출금 금액이 잔액보다 클 수 없습니다.");
    amount.value = "";
    return;
  }

  if(amount.value >= balance) {
    alert(`${amount.value}원이 출금 되었습니다. 남은 잔액: ${balance - amount.value}원`);
  }

  output.innerText = (balance -= Number(amount.value));
  amount.value = "";
}