const gameStartBtn = document.querySelector("#gameStart");
const scissorsBtn = document.querySelector("#scissors");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const userBoxVal = document.querySelector("#userBox>.box");
const comBoxVal = document.querySelector("#comBox>.box");
const recordBox = document.querySelector(".record-box")

function updateRecord(result, userChoice, comChoice) {
  const li = document.createElement("li");
  const srp = ["가위", "바위", "보"];

  li.innerHTML = `
    <span style="color: ${result === "win" ? "green" : result === "draw" ? "blue" : "red"}; font-weight: bold;">
      ${result.toUpperCase()}
    </span>
    <span>${srp[userChoice]}</span> VS <span>${srp[comChoice]}</span>`;
  
    recordBox.append(li);
}

// 승무패의 수를 증가시키시는 함수들
let winSum = 0;
let drawSum = 0;
let loseSum = 0;

/** 승리 시 승 수를 증가시키는 함수 */
function win() {
  const winVal = document.querySelector(".win");

  winSum++

  winVal.innerHTML = winSum;
}

/** 무승부 시 무 수를 증가시키는 함수 */
function draw() {
  const drawVal = document.querySelector(".draw");

  drawSum++;

  drawVal.innerHTML = drawSum;
}

/** 패배 시 패 수를 증가시키는 함수 */
function lose() {
  const loseVal = document.querySelector(".lose");

  loseSum++;

  loseVal.innerHTML = loseSum;
}

/** 유저의 수와 컴퓨터의 난수를 비교해 승무패를 판단하는 함수 */
function judgeWinDrawLose(a, b) {
  switch(a) {
    case 0: 
      if(b == 2) {
        win();
        return "win";
      } else if(b == 0) {
        draw();
        return "draw";
      } else {
        lose();
        return "lose";
      }; 
    case 1:
      if(b == 0) {
        win();
        return "win";
      } else if(b == 1) {
        draw();
        return "draw";
      } else {
        lose();
        return "lose";
      };
    case 2:
      if(b == 1) {
        win();
        return "win";
      } else if(b == 2) {
        draw();
        return "draw";
      } else {
        lose();
        return "lose";
      };
  }
}

/** 상대방 박스에 가위 바위 보를 무작위로 출력하고 난수를 반환하는 함수 */
function randomSRP() {
  const randomNum = Number(Math.floor(Math.random() * 3));

  switch(randomNum) {
    case 0: comBoxVal.style.backgroundImage = `url("./images/가위R.png")`; break;
    case 1: comBoxVal.style.backgroundImage = `url("./images/바위R.png")`; break;
    case 2: comBoxVal.style.backgroundImage = `url("./images/보R.png")`; break;
  }

  return randomNum;
}

/** 게임 초기화 함수 */
function resetGame() {
  winSum = 0;
  drawSum = 0;
  loseSum = 0;

  document.querySelector(".win").innerHTML = "0";
  document.querySelector(".draw").innerHTML = "0";
  document.querySelector(".lose").innerHTML = "0";

  recordBox.innerHTML = "";

  userBoxVal.style.backgroundImage = "none";
  comBoxVal.style.backgroundImage = "none";
}

// 게임 시작 버튼 클릭 시
gameStartBtn.addEventListener("click", () => {
  const gameNum = Number(prompt("진행할 판 수를 입력하세요."));

  if(gameNum === null) {
    alert("숫자 입력 후 확인을 눌러주세요.");
    return;
  }

  if(isNaN(gameNum) || gameNum <= 0) {
    alert("올바른 숫자를 입력하세요.");
    return;
  }

  resetGame();

  // 게임 시작
  let currentRound = 0;

  const playRound = (userChoice) => {
    if(currentRound === gameNum) {
      scissorsBtn.removeEventListener("click", scissorsBtnClick);
      rockBtn.removeEventListener("click", rockBtnClick);
      paperBtn.removeEventListener("click", paperBtnClick);

      alert("모든 라운드가 완료되었습니다.");
      return;
    }

    currentRound++;

    const images = ["./images/가위L.png", "./images/바위L.png", "./images/보L.png"];
    userBoxVal.style.backgroundImage = `url(${images[userChoice]})`;

    const randomNum = randomSRP();
    const result = judgeWinDrawLose(userChoice, randomNum);

    updateRecord(result, userChoice, randomNum);
  };

  // 각 버튼을 눌렀을 때
  function scissorsBtnClick() {
    playRound(0);
  }

  scissorsBtn.addEventListener("click", scissorsBtnClick);

  function rockBtnClick() {
    playRound(1);
  }

  rockBtn.addEventListener("click", rockBtnClick);

  function paperBtnClick() {
    playRound(2);
  }

  paperBtn.addEventListener("click", paperBtnClick);
});