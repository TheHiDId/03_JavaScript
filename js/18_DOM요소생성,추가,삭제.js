const standard = document.querySelector("#standard"); // 기준이 되는 box
const btns = document.querySelectorAll(".btn"); // 버튼 5개

let count = 1; // 요소 내용

// 모든 버튼에 클릭 이벤트 리스너 추가
for(let btn of btns) {
  btn.addEventListener("click", (e) => { // e: 이벤트 관련 정보가 담긴 객체, e.target: 이벤트가 발생한 객체
    const str = e.target.innerText; // 클릭된 버튼에 작성된 내용 얻어오기
    
    switch(str) {
      case "prepend":
        const span1 = document.createElement("span"); // span 요소 생성
        const text1 = document.createTextNode(count); // textNode 생성

        span1.appendChild(text1); // 생성된 텍스트노드를 스팬의 자식으로 추가

        span1.style.backgroundColor = "skyblue"; // span1 배경색 추가

        standard.prepend(span1); // #standard 요소의 첫번째 자식으로 추가
      break;
      case "append":
        const span2 = document.createElement("span");
        const text2 = document.createTextNode(count);

        span2.appendChild(text2);
        span2.style.backgroundColor = "lightsalmon";

        standard.append(span2); // standard의 마지막 자식으로 span2 추가
      break;
      case "before":
        const div1 = document.createElement("div"); // div 요소 생성

        div1.className = "box"; // div 요소에 box 클래스 추가
        div1.style.backgroundColor = "orange";
        div1.innerText = count; // div의 내용으로 카운트 추가 (텍스트노드 미사용)

        standard.before(div1); // #standard 앞쪽에 요소를 추가
      break;
      case "after":
        const div2 = document.createElement("div");

        div2.className = "box";
        div2.style.backgroundColor = "springgreen";
        div2.innerText = count;

        standard.after(div2); // #standard의 뒤쪽에 추가
      break;
      case "remove":
        const boxes = document.querySelectorAll(".box:not(#standard)"); // #standard가 아닌 .box 요소를 모두 선택
        const spans = document.querySelectorAll("#standard > span"); // #standard의 모든 자식 span 요소 선택

        for(let box of boxes) {
          box.remove();
        }

        for(let span of spans) {
          span.remove();
        }

        count = 0;
      break;
    }

    count++;
  });
}