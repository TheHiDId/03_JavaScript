const valuePhoneNum = document.querySelector("#valuePhoneNum");
const phoneNumBtns = document.querySelectorAll(".phoneNumBtn");
const resetBtn = document.querySelector("#resetBtn");
const addBtn = document.querySelector("#addBtn");
const listContainer = document.querySelector("#listContainer");

// 번호를 눌렀을 때 입력
for(let phoneNumBtn of phoneNumBtns) {
  phoneNumBtn.addEventListener("click", () => {
    if(valuePhoneNum.innerHTML.length >= 11) {
      return;
    }

    valuePhoneNum.innerHTML += phoneNumBtn.innerHTML;
  });
}

// 초기화 버튼을 눌렀을 때 입력해놓은 번호 지워짐
resetBtn.addEventListener("click", () => {
  valuePhoneNum.innerHTML = ""
});

// 추가 버튼을 눌렀을 때 요소를 생성하고 조합하여 전화 번호 목록에 추가
addBtn.addEventListener("click", () => {
  const ul = document.createElement("ul");
  const li = document.createElement("li");

  const spanSavedPhoneNum = document.createElement("span");
  spanSavedPhoneNum.className = "savedPhoneNum";
  spanSavedPhoneNum.innerHTML = valuePhoneNum.innerHTML;

  const spanFavoriteNum = document.createElement("span");
  spanFavoriteNum.className = "favoriteNum";
  spanFavoriteNum.innerHTML = "&star;"

  const spanDeleteNum = document.createElement("span");
  spanDeleteNum.className = "deleteNum";
  spanDeleteNum.innerHTML = "&times;";

  // 저장된 번호 클릭 시 자동으로 그 번호가 입력
  spanSavedPhoneNum.addEventListener("click", () => {
    valuePhoneNum.innerHTML = spanSavedPhoneNum.innerHTML;
  });

  // 즐겨찾기
  spanFavoriteNum.addEventListener("click", (e) => {
    if(e.target.style.color === "orange") {
      e.target.style.color = "black";
      spanSavedPhoneNum.style.color = "black";
      return;
    }
    
    e.target.style.color = "orange";
    spanSavedPhoneNum.style.color = "red";
  });

  // 삭제
  spanDeleteNum.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove(); // 한 줄 제거
  });

  li.append(spanSavedPhoneNum, spanFavoriteNum, spanDeleteNum);
  ul.append(li);
  listContainer.append(ul);
});