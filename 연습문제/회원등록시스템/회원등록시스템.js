const registerBtn = document.querySelector("#registerBtn");

registerBtn.addEventListener("click", () => {
  const inputIdVal = document.querySelector("#inputId").value;
  const inputNameVal = document.querySelector("#inputName").value;
  const inputPhoneNumVal = document.querySelector("#inputPhoneNum").value;
  
  if(inputIdVal.length === 0 || inputNameVal.length === 0 || inputPhoneNumVal.length === 0) {
    return;
  }

  const listTable = document.querySelector("#listTable");

  const trListTableRow = document.createElement("tr");
  trListTableRow.classList.add("listTableRow", "created");

  const tdListCheckbox = document.createElement("td");
  tdListCheckbox.classList.add("listCheckbox")

  const inputCheckbox = document.createElement("input");
  inputCheckbox.setAttribute("type", "checkbox");
  inputCheckbox.setAttribute("class", "listCheckbox");

  tdListCheckbox.append(inputCheckbox);

  const tdListId = document.createElement("td");
  tdListId.classList.add("listId");
  tdListId.innerText = inputIdVal;

  const tdListName = document.createElement("td");
  tdListName.classList.add("listName");
  tdListName.innerText = inputNameVal;

  const tdListPhoneNum = document.createElement("td");
  tdListPhoneNum.classList.add("listPhoneNum");
  tdListPhoneNum.innerText = inputPhoneNumVal;

  trListTableRow.append(tdListCheckbox, tdListId, tdListName, tdListPhoneNum);

  listTable.append(trListTableRow);
});

const deleteBtn = document.querySelector("#deleteBtn");

deleteBtn.addEventListener("click", () => {
  const listCheckboxChecked = document.querySelectorAll(".listCheckbox:checked");

  for(let CheckedOne of listCheckboxChecked) {
    if(CheckedOne.parentElement.parentElement.classList.contains("created")) {
      CheckedOne.parentElement.parentElement.remove();
    }
  }
});

const tableHeaderCheckbox = document.querySelector(".tableHeader");

tableHeaderCheckbox.addEventListener("change", () => {
  
});