const count = document.querySelector(".count");
const result = document.querySelector(".result");

count.addEventListener("click", () => {
  const appleChecked = document.querySelector("#appleChecked").checked;
  const bananaChecked = document.querySelector("#bananaChecked").checked;
  const MelonChecked = document.querySelector("#melonChecked").checked;

  const inputAppleNum = document.querySelector(".inputAppleNum");
  const inputBananaNum = document.querySelector(".inputBananaNum");
  const inputMelonNum = document.querySelector(".inputMelonNum");
  
  let inputAppleNumVal = Number(inputAppleNum.value);
  let inputBananaNumVal = Number(inputBananaNum.value);
  let inputMelonNumVal = Number(inputMelonNum.value);

  let resultText = "";

  if(appleChecked === true) {
    resultText += `사과 ${inputAppleNumVal}개 `;
  } else {
    inputAppleNumVal = 0;
  }

  if(bananaChecked === true) {
    resultText += `바나나 ${inputBananaNumVal}개 `;
  } else {
    inputBananaNumVal = 0;
  }

  if(MelonChecked === true) {
    resultText += `멜론 ${inputMelonNumVal}개 `;
  } else {
    inputMelonNumVal = 0;
  }

  resultText += `총합 ${(2000 * inputAppleNumVal) + (3000 * inputBananaNumVal) + (5000 * inputMelonNumVal)}원`;

  result.innerHTML = resultText;
});