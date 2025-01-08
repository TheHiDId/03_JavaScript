/** break 멈춤 */
function check1() {
  const stopNumber = Number(prompt("1에서 20사이 멈추고 싶은 숫자를 입력"));

  for(let num = 1; num <= 20; num++) {
    console.log(num);

    if(num == stopNumber) {
      break; // 반복을 멈춤 -> for문 종료
    }
  }
}

/** 무한 반복 멈추기 */
function check2() {
  let num = 1;

  while(true) { // 조건식 항상 참: 무한히 반복
    console.log(num++);

    if(num === 100) {
      break;
    }
  }
}

/** 무한 반복 멈추기2 */
function check3() {
  // prompt에 취소가 입력될 때 까지 숫자를 입력받아 합계 구하기
  let sum = 0;

  while(true) {
    const value = prompt("숫자 입력(취소 시 종료)");

    if(value === null) {
      break;
    }

    sum += Number(value);
  }
  
  alert(`합계: ${sum}`);
}

/** 중첩 반복문에서 break 사용 */
function check4() {
  for(let i = 1; i <= 3; i++) {
    let result = "";

    for(let j = 1; j <= 5; j++) {
      result += j;

      if(j === 4) { // 4일 때 멈춤
        break;
      }
    }

    console.log(result);
    console.log("------");

    if(i === 2) {
      break;
    }
  }
}

/** continue 확인 */
function check5() {
  let result = ""

  for(let i = 1; i <= 20; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      continue;
    }

    result += i + " ";
  }
  
  console.log(result);
}

/** continue 확인 2 */
/* 
  123456789 5줄 출력
  단 n번 줄 출력 시 n제외
*/
function check6() {
  for(let j = 1; j <= 5; j++){
    let result =  "";

    for(let i = 1; i <= 9; i++) {
      if(i === j) {
        continue;
      }

      result += i;
    }

    console.log(result);
  }
}

/** Up & Down 게임: 1부터 200사이 난수를 몇 회 만에 맞추는지 카운트하는 게임 */
function startGame() {
  const answer = Math.floor(Math.random() * 200 + 1);

  let count = 0;

  while(true) {
    const input = prompt("1부터 200사이 숫자 입력");

    if(input === null) {
      alert(`${count}번째에서 포기하셨습니다. (정답: ${answer})`);
      break;
    }

    if(input.length === 0) {
      alert("다시 입력하세요.");
      continue;
    }

    const inputNum = Number(input);

    if(inputNum < 1 || inputNum > 200) {
      alert("1에서 200사이 숫자만 입력하세요.");
      continue;
    }

    count++;

    if(count === 7) {
      alert(`7회! 실패! (정답: ${answer})`);
      break;
    }

    if(inputNum === answer) {
      alert(`정답! ${answer} / 시도 횟수: ${count}`);
      break;
    }

    if(answer < inputNum) {
      alert(`Down! (현재 ${count}회)`);
      continue;
    } else if(answer > inputNum) {
      alert(`Up! (현재 ${count}회)`);
      continue;
    } 
  }
}