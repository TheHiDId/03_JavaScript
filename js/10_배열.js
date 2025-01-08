/** 배열 선언 및 기초 사용법 */
function check1() {
  const arr1 = new Array(); // 0칸 배열
  const arr2 = new Array(3); // 3칸 배열 (요소가 전부 비어있음)
  const arr3 = []; // 0칸 배열
  const arr4 = ["사과", "딸기", "바나나"]; // 3칸 배열 + 초기화(변수에 처음 값을 대입하는 것)

  console.log(arr1, arr2, arr3, arr4);

  // 배열 길이 확인
  console.log(arr1.length);
  console.log(arr2.length);
  console.log(arr3.length);
  console.log(arr4.length);

  // 배열의 각 요소 접근 방법: 배열명[index]
  console.log(`arr4[0]: ${arr4[0]}`);
  console.log(`arr4[1]: ${arr4[1]}`);
  console.log(`arr4[2]: ${arr4[2]}`);
  console.log(`arr4[3]: ${arr4[3]}`); // 없는 인덱스: undefined 반환

  // 배열 요소에 값 대입: 배열명[index] = 값;
  arr2[0] = 123;
  arr2[1] = "27일은 임시공휴일";
  arr2[2] = true;
  // 서로 다른 자료형 저장 가능
  arr2[3] = 456; // 없는 인덱스에 값 대입: 자동으로 생성되고 대입
  arr2[6] = "건너뛰기도 가능?"; // 없는 인덱스로 건너뛰기: 중간에 발생하는 인덱스는 비워둔 채 자동으로 생성되고 대입

  console.log("arr2: ", arr2);
}

/** 배열과 for문 */
function check2() {
  const weeks = ['월', '화', '수', '목', '금', '토', '일']; // weeks.length == 7;

  for(let i = 0; i < weeks.length; i++) {
    console.log(weeks[i]);
  }

  console.log("---")

  for(let i = weeks.length - 1; i >= 0; i--) {
    console.log(weeks[i]);
  }
}

/** 배열과 for문 2 */
function check3() {
  // 프롬프트(prompt)로 입력받은 값을 배열 요소에 순차적으로 초기화
  const arr = []; // 0칸 짜리 배열이지만 값 대입 시 자동으로 길이 증가

  for(let i = 0; i < 4; i++) {
    arr[i] = prompt(`${i}번째 요소에 저장할 값 입력`);
  }

  console.log(arr);
}

/** 배열과 for문 3 */
function check4() {
  const arr = new Array(5);

  let sum = 0;
  let avg = 0;
  let evenSum = 0;
  let oddSum = 0;

  for(let i = 0; i < arr.length; i++) {
    arr[i] = Number(prompt(`${i}번쨰 요소에 저장할 값 입력`));
    sum += arr[i];

    if(i % 2 == 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }

  avg = sum / arr.length;

  console.log(arr);
  console.log('합계: ', sum);
  console.log('평균: ', avg);
  console.log('짝수 인덱스에 저장된 값의 합계: ', evenSum);
  console.log('홀수 인덱스에 저장된 값의 합계: ', oddSum);
}

/** 배열과 for문 4 */
function check5() {
  const arrLen = Number(prompt("생성할 배열 길이 입력"));
  const arr = new Array(arrLen);

  for(let i = 0; i < arrLen; i++) {
    const ranNum = Math.floor(Math.random() * arrLen);

    arr[i] = ranNum;
  }

  console.log("결과: ", arr);
}

/** 점심 메뉴 뽑기 */
function selectMenu() {
  const menus = ['제육덮밥', '돈까스', '순두부찌개'];
  
  const ranNum = Math.floor(Math.random() * menus.length);

  document.getElementById("menuResult").innerText = menus[ranNum];
}

/** 로또 번호 추첨 */
function createLottery() {
  const lottery = document.getElementById("lottery");

  lottery.innerText = "";

  // 배열에 중복되지 않는 난수 6개 저장
  const arr = [];

  for(let i = 0; i < 6; i++) {
    // 1에서 45사이 난수 발생
    const ranNum = Math.floor(Math.random() * 45 + 1);

    if(arr.includes(ranNum)) {
      i--; // 제자리 유지
      continue;
    }

    arr[i] = ranNum;
  }

  // 배열 내 숫자 정렬(sort)
  arr.sort(function(a, b) {return a - b;})

  console.log("arr: ", arr);

  for(let i = 0; i < arr.length; i++) {
    lottery.innerHTML += `<div>${arr[i]}</div>`
  }
}

/** 2차원 배열 확인 */
function check6() {
  const num1 = 1;
  const num2 = 2;
  const num3 = 3;

  // 1차원 배열 선언
  const arr1 = [num1, num2, num3];
  const arr2 = [4, 5, 6];
  const arr3 = [7, 8, 9];

  // 2차원 배열 선언
  const dArr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  const dArr2 = [arr1, arr2, arr3];

  console.log("dArr1: ", dArr1);
  console.log("dArr2: ", dArr2);

  // 2차원 배열에 인덱스 이용해서 접근하기
  console.log("dArr2[0]: ", dArr2[0]);
  console.log("dArr2[0].length: ", dArr2[0].length);

  console.log("dArr2[1]: ", dArr2[1]);
  console.log("dArr2[1].length: ", dArr2[1].length);

  console.log("dArr2[2]: ", dArr2[2]);
  console.log("dArr2[2].length: ", dArr2[2].length);

  console.log("dArr2.length: ", dArr2.length); // 2차원 배열 내에 저장된 1차원 배열 요소의 개수: 3

  // dArr2의 x행 y열에 저장된 값 얻어오기
  console.log("dArr2[0][2]: ", dArr2[0][2]);
  console.log("dArr2[1][1]: ", dArr2[1][1]);
  console.log("dArr2[2][0]: ", dArr2[2][0]);

  // 2차원 배열 인덱스를 이용해서 값 대입
  // 0행 0열, 1행 0열, 2행 0열 값을 * 10 해서 대입
  dArr2[0][0] *= 10;
  dArr2[1][0] *= 10;
  dArr2[2][0] *= 10;

  console.log(dArr2);
}

/** 2차원 배열 확인 2 */
function check7() {
  // 4행 4열 2차원 배열에 1 ~ 16 난수 배치 (중복 없음)
  // 1. 배열을 콘솔에 출력
  // 2. 프롬프트를 이용해서 1 ~ 16 사이 숫자를 입력
  // 3. 2차원 배열 어디에 위치하는지 검색해서 출력

  // 중복되지 않는 난수 16개를 저장한 1차원 배열 생성
  const randomArr = [];

  for(let i = 0; i < 16; i++) {
    const num = Math.floor(Math.random() * 16 + 1); // 1 ~ 16 난수

    // 중복 제거
    if(randomArr.includes(num)) {
      i--;
      continue;
    }

    randomArr[i] = num;
  }

  console.log(randomArr);
  
  // 2중 for문을 이용해서 2차원 배열 모든 요소 접근
  let index = 0; // randomArr의 요소에 접근하기 위한 변수 선언

  const arr = [];

  for(let row = 0; row < 4; row++) {
    arr[row] = []; // 행 생성

    for(let col = 0; col < 4; col++) {
      // arr[row][col] = `(${row}, ${col})`; // 열 데이터 추가
      // randomArr 배열의 요소를 하나씩 꺼내서 arr[row][col]에 대입
      arr[row][col] = randomArr[index];
      index++; // 변수를 1 증가시켜 randomArr 다음 요소 지정
    }
  }

  console.log(arr);

  // 1 ~ 16 숫자 입력 받기
  const input = Number(prompt("1 ~ 16 숫자 입력"));

  // 2차원 배열 어디에 위치하는지 검사해서 출력
  for(let row = 0; row < arr.length; row++) {
    for(let col = 0; col < arr[row].length; col++) {
      if(arr[row][col] === input) {
        alert(`${input}은/는 (${row}, ${col})에 있습니다.`);
        return; // 중복되는 숫자가 없기 때문에 값을 찾으면 함수를 종료
      }
    }
  }
}