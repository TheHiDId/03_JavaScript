// Node 탐색 확인
const checkBtn1 = document.querySelector("#checkBtn1");

checkBtn1.addEventListener("click", () => {
  const test1 = document.querySelector("#test1"); // ul

  // 요소.childNodes: 모든 자식 노드 반환(NodeList, 유사배열)
  const list = test1.childNodes;
  console.log("list:", list);
  // 요소, 텍스트(줄바꿈, 띄어쓰기 등), 코멘트(주석)

  // 원하는 자식 노드 선택
  console.log("첫번째 li 태그: ", list[3]);

  // #li1의 부모 노드 탐색
  // 요소.parentNode
  const li1 = document.querySelector("#li1");
  const parent = li1.parentNode;
  console.log("parent: ", parent);

  // 요소.firstChild: 첫번째 자식 노드 탐색
  // 요소.lastChild: 마지막 자식 노드 탐색
  console.log("firstChild: ", parent.firstChild);
  console.log("lastChild: ", parent.lastChild);

  // parent의 마지막 자식 배경색을 pink로 변경
  parent.lastChild.style.backgroundColor = "pink";

  // 요소.previousSibling: 이전 형제 노드 탐색
  // 요소.nextSibling: 다음 형제 노드 탐색
  // list[9]의 다음, 다음 형제 노드 탐색
  console.log(list[9].nextSibling.nextSibling); // list[11]
  // list[5]의 이전, 이전 형제 노드 탐색
  console.log(list[5].previousSibling.previousSibling) // list[3]

  // <a href="#">4번</a> 글자색 red로 변경
  parent.lastChild.childNodes[1].style.color = "red";
});

// Element 탐색 확인
const checkBtn2 = document.querySelector("#checkBtn2");

checkBtn2.addEventListener("click", () => {
  const li2 = document.querySelector("#li2");

  const parent = li2.parentElement;
  console.log("parent: ", parent);

  console.log("children: ", parent.children);

  console.log("firstElementChild: ", parent.firstElementChild);
  console.log("lastElementChild: ", parent.lastElementChild);

  console.log("parent.children[1]의 이전 형제 요소: ", parent.children[1].previousElementSibling);
  console.log("parent.children[1]의 다음 형제 요소: ", parent.children[1].nextElementSibling);
});