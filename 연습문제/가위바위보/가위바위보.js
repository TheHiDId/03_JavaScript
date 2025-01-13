const gameStartBtn = document.querySelector("#gameStart");
const scissorsBtn = document.querySelector("#scissors");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const userBoxVal = document.querySelector("#userBox>.box");
const comBoxVal = document.querySelector("#comBox>.box");
const resultBox = document.querySelector("#resultBox");

let winSum = 0;
let drawSum = 0;
let loseSum = 0;

const div = document.createElement("div");
div.className = "record-box";

const spanVs = document.createElement("span");
spanVs.innerHTML = "VS";

const spanWin = document.createElement("span");
spanWin.innerHTML = "WIN";
spanWin.style.color = "green";

const spanDraw = document.createElement("span");
spanDraw.innerHTML = "DRAW";
spanDraw.style.color = "blue";

const spanLose = document.createElement("span");
spanLose.innerHTML = "LOSE";
spanLose.style.color = "red";

const spanScissors = document.createElement("span")
spanScissors.innerHTML = "가위";

const spanRock = document.createElement("span")
spanRock.innerHTML = "바위";

const spanPaper = document.createElement("span")
spanPaper.innerHTML = "보";

/** 플레이어가 가위를 냈을 때 승무패를 기록하는 함수 */
function scissorsRecord(a) {
  switch(a) {
    case 0:
      div.append(spanDraw, spanScissors, spanVs, spanScissors);
    break;
    case 1:
      div.append(spanLose, spanScissors, spanVs, spanRock);
    break;
    case 2:
      div.append(spanWin, spanScissors, spanVs, spanPaper);
    break;
  }

  resultBox.append(div);
}

/** 플레이어가 바위를 냈을 때 승무패를 기록하는 함수 */
function rockRecord(a) {
  switch(a) {
    case 0:
      div.append(spanWin, spanRock, spanVs, spanScissors);
    break;
    case 1:
      div.append(spanDraw, spanRock, spanVs, spanRock);
    break;
    case 2:
      div.append(spanLose, spanRock, spanVs, spanPaper);
    break;
  }

  resultBox.append(div);
}

/** 플레이어가 보를 냈을 때 승무패를 기록하는 함수 */
function paperRecord(a) {
  switch(a) {
    case 0:
      div.append(spanLose, spanPaper, spanVs, spanScissors);
    break;
    case 1:
      div.append(spanWin, spanPaper, spanVs, spanRock);
    break;
    case 2:
      div.append(spanDraw, spanPaper, spanVs, spanPaper);
    break;
  }

  resultBox.append(div);
}

/** 승리 시 승 수를 증가시키는 함수 */
function win() {
  const winVal = document.querySelector(".win");

  winSum++

  winVal.innerHTML = winSum;
}

function draw() {
  const drawVal = document.querySelector(".draw");

  drawSum++;

  drawVal.innerHTML = drawSum;
}

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
      } else if(b == 0) {
        draw();
      } else {
        lose();
      }; 
    break;
    case 1:
      if(b == 0) {
        win();
      } else if(b == 1) {
        draw();
      } else {
        lose();
      };
    break;
    case 2:
      if(b == 1) {
        win();
      } else if(b == 2) {
        draw();
      } else {
        lose();
      };
    break;
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

// 게임 시작
gameStartBtn.addEventListener("click", () => {
  const gameNum = prompt("진행할 판 수를 입력하세요.");

  if(gameNum === null) {
    alert("숫자 입력 후 확인을 눌러주세요.");
    return;
  }

  for(let i = 1; i <= Number(gameNum); i++) {
    
  }
});

// 가위 버튼을 눌렀을 때
scissorsBtn.addEventListener("click", () => {
  userBoxVal.style.backgroundImage = `url("./images/가위L.png")`;
  userBoxVal.value = 0;

  randomSRP();

  let randomNum = randomSRP();

  judgeWinDrawLose(userBoxVal.value, randomNum);

  scissorsRecord(randomNum);
});

// 바위 버튼을 눌렀을 때
rockBtn.addEventListener("click", () => {
  userBoxVal.style.backgroundImage = `url("./images/바위L.png")`;
  userBoxVal.value = 1;

  randomSRP();

  let randomNum = randomSRP();

  judgeWinDrawLose(userBoxVal.value, randomNum);

  rockRecord(randomNum);
});

// 보 버튼을 눌렀을 때
paperBtn.addEventListener("click", () => {
  userBoxVal.style.backgroundImage = `url("./images/보L.png")`;
  userBoxVal.value = 2;

  randomSRP();

  let randomNum = randomSRP();

  judgeWinDrawLose(userBoxVal.value, randomNum);

  paperRecord(randomNum);
});