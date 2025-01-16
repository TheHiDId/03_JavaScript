// 식당 이름 입력 관련
const titleContainer = document.querySelector("#titleContainer");

// 식당 이름 클릭 시
titleContainer.addEventListener("click", () => {
  const resName = document.querySelector("#resName");

  resName.remove();

  const createdInputResName = document.createElement("input");
  createdInputResName.setAttribute("type", "text")
  createdInputResName.setAttribute("id", "inputResName")

  titleContainer.append(createdInputResName);

  createdInputResName.focus();

  const inputResName = document.querySelector("#inputResName");

  inputResName.addEventListener("blur", () => {
    const spanResName = document.createElement("span");
    spanResName.setAttribute("id", "resName");
    spanResName.setAttribute("class", "res-name");
    
    if(inputResName.value.length === 0) {
      spanResName.textContent = "식당명을 입력하세요";
    } else {
      spanResName.textContent = inputResName.value;
    }
  
    titleContainer.append(spanResName, spanResName);

    inputResName.remove();
  });
});


// 수정 버튼 클릭 관련
const editContainer = document.querySelector("#editContainer")
let editBtn = document.querySelector("#editBtn");

// 수정 버튼 클릭 시 사용될 함수
function handleEditClick() {
  const createdAddBtn = document.createElement("button");
  createdAddBtn.setAttribute("id", "addBtn");
  createdAddBtn.textContent = "추 가";
  
  const createdDelBtn = document.createElement("button");
  createdDelBtn.setAttribute("id", "delBtn");
  createdDelBtn.textContent = "삭 제";
  
  const createdQuitBtn = document.createElement("button");
  createdQuitBtn.setAttribute("id", "quitBtn");
  createdQuitBtn.textContent = "종 료";
  
  editContainer.append(createdAddBtn, createdDelBtn, createdQuitBtn);
  
  editBtn.remove();
  
  const liMenu = document.querySelectorAll(".menu")
  
  // for(let li of liMenu) {
  //   const menuName = li.querySelector(".menu-name").innerHTML;
  //   const menuPrice = li.querySelector(".price").innerHTML;

  //   li.innerHTML = "";

  //   const inputCheckbox = document.createElement("input");
  //   inputCheckbox.setAttribute("type", "checkbox");
  //   inputCheckbox.setAttribute("class", "menu-check");

  //   const inputMenuName = document.createElement("input");
  //   inputMenuName.setAttribute("type", "text");
  //   inputMenuName.setAttribute("class", "input-menu-name");
  //   inputMenuName.value = menuName;

  //   const inputPrice = document.createElement("input");
  //   inputPrice.setAttribute("type", "number");
  //   inputPrice.setAttribute("class", "input-price");
  //   inputPrice.value = menuPrice || "";

  //   li.append(inputCheckbox, inputMenuName, inputPrice);
  // }
  
  // 추가 버튼 클릭 시
  const addBtn = document.querySelector("#addBtn");
  
  addBtn.addEventListener("click", () => {
    addMenuInput();
  });
  
  // 삭제 버튼 클릭 시
  const delBtn = document.querySelector("#delBtn");
  
  delBtn.addEventListener("click", () => {
    const menuChecked = document.querySelectorAll(".menu-check:checked")

    for(let menu of menuChecked) {
      menu.parentElement.remove();
    }
  });
  
  // 종료 버튼 클릭 시
  const quitBtn = document.querySelector("#quitBtn");
  
  quitBtn.addEventListener("click", () => {
    const menus = document.querySelectorAll(".menu");

    // for(let menu of menus) {
    //   const inputMenuName = menu.querySelector(".input-menu-name");
    //   const inputPrice = menu.querySelector(".input-price");
  
    //   const spanMenuName = document.createElement("span");
    //   spanMenuName.setAttribute("class", "menu-name");
  
    //   const spanPrice = document.createElement("span");
    //   spanPrice.setAttribute("class", "price");
  
    //   spanMenuName.textContent = inputMenuName.value.trim() || "미입력";
    //   spanPrice.textContent = inputPrice.value ? `${Number(inputPrice.value, 10)}원` : "0원";
  
    //   menu.innerHTML = "";
    //   menu.append(spanMenuName, spanPrice);
    // }

    if (!document.querySelector("#editBtn")) {
      const createdEditBtn = document.createElement("button");
      createdEditBtn.setAttribute("id", "editBtn");
      createdEditBtn.textContent = "수 정";
    
      editContainer.append(createdEditBtn);
    
      editBtn = createdEditBtn;
      editBtn.addEventListener("click", handleEditClick);
    }

    addBtn.remove();
    delBtn.remove();
    quitBtn.remove();
  });
}

// 수정 버튼 클릭 시
editBtn.addEventListener("click", handleEditClick);

// 추가 버튼 클릭 시 이용될 함수
function addMenuInput() {
  const menuLength = document.querySelectorAll('.menu').length;

  if (menuLength >= 15) {
    return;
  }

  const liMenu = document.createElement("li");
  liMenu.setAttribute("class", "menu");

  const inputCheckbox = document.createElement("input");
  inputCheckbox.setAttribute("type", "checkbox");
  inputCheckbox.setAttribute("class", "menu-check");

  const inputMenuName = document.createElement("input");
  inputMenuName.setAttribute("type", "text");
  inputMenuName.setAttribute("class", "input-menu-name");

  const inputPrice = document.createElement("input");
  inputPrice.setAttribute("type", "number");
  inputPrice.setAttribute("class", "input-price");

  liMenu.append(inputCheckbox, inputMenuName, inputPrice);

  const menuList = document.querySelector("#menuList");
  
  menuList.append(liMenu);
}