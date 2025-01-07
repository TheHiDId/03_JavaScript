/** 구구단 표 */
function createTable() {
  const startInput = document.getElementById("start");
  const endInput = document.getElementById("end");
  const thead = document.getElementById("thead");
  const tbody = document.getElementById("tbody");

  thead.innerHTML = "";
  tbody.innerHTML = "";

  const startNum = Number(startInput.value);
  const endNum = Number(endInput.value);

  if(startInput.value.length === 0 || endInput.value.length === 0) {
    alert("시작/종료 단을 입력하세요.");
    return;
  }

  if(startNum < 2 || endNum < 2) {
    alert("2 이상의 수만 입력하세요.");
    return;
  }

  if(startNum > endNum) {
    alert("시작 단이 종료 단 보다 클 수 없습니다.");
    return;
  }

  let outputHeadHtml = "<tr>";

  for(let i = startNum; i <= endNum; i++) {
    outputHeadHtml += `<th>${i}단</th>`;
  }

  outputHeadHtml += "</tr>"
  thead.innerHTML = outputHeadHtml;

  for(let i = 2; i <= 9; i++) {
    let outputBodyHtml = "<tr>";
    
    for(let j = startNum; j <= endNum; j++) {
      outputBodyHtml += `<td>${j} x ${i} = ${j * i}</td>`
    }

    outputBodyHtml += "</tr>"
    tbody.innerHTML += outputBodyHtml;
  }
}