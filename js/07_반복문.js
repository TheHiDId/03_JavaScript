/** 콘솔에 12345 출력 */
function check1() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);

  console.log("---");

  // for문 활용
  for(let num = 1; num <= 5; num++) {
    console.log(num);
    // [초기식] let num = 1; -> 1이 저장된 변수 num을 선언
    // [조건식] num <= 5; -> num 변수에 저장된 값이 5이하면 참, 따라서 계속 반복
    //                    -> num 변수에 저장된 값이 5이하가 아니면 거짓, 따라서 반복 멈춤
    // [증감식] num++ -> num 변수에 저장된 값을 반복 때마다 1 증가
    // 즉 num 값이 1부터 5까지 1씩 증가하는 동안 반복하라는 의미
  }
}

/** 콘솔에 1부터 10까지 1씩 증가하며 출력 */
function check2() {
  for(let num = 1; num <= 10; num++) {
    console.log(num);
  }
}

/** 콘솔에 5부터 13까지 1씩 증가하며 출력 */
function check3() {
  for(let num = 5; num < 14; num++) {
    console.log(num);
  }
}

/** 콘솔에 1부터 7까지 1씩 증가한 문자열을 한 줄로 출력 */
function check4() {
  let result = ""; // 결과를 저장할 변수에 빈칸 대입

  for(let num = 1; num <= 7; num++){
    result += num; // 문자열 + 숫자 = 문자열 -> "" + 1 = "1"
  }

  console.log(result); // "1234567"
}

/** 콘솔에 4부터 11까지 1씩 증가한 문자열을 한 줄로 출력 */
function check5() {
  let result = "";
  // let result;: result 선언 시 아무런 값도 대입하지 않으면 자료형은 undefined가 되고 산술 연산의 대상이 될 수 없으므로 NaN(Not a Number)이 반환됨

  for(let num = 4; num <= 11; num++) {
    result += num;
  }

  console.log(result); // "4567891011"
}

/** 콘솔에 1부터 10까지 1씩 증가한 숫자의 합을 출력 */
function check6() {
  let sum = 0; // 합계를 저장할 변수를 선언하고 0을 대입

  for(let num = 1; num <= 10; num++) {
    sum += num;
  }

  console.log(sum); // 55
}

/** 입력받은 값 사이 1씩 증가한 값들의 합 출력 */
function check7() {
  // 모든 값이 입력되어있고 입력 1이 입력 2보다 작다고 가정
  const a = Number(document.getElementById("input7a").value);
  const b = Number(document.getElementById("input7b").value);
  let sum = 0;

  for(let num = a; num <= b; num++) {
    sum += num;
  }

  alert(`${a} 부터 ${b} 사이 정수 합: ${sum}`)
}

/** 콘솔에 1부터 10까지 2씩 증가한 숫자와 합계 출력 */
function check8() {
  let sum = 0;

  for(let num = 1; num <= 10; num += 2) {
    console.log(num);
    sum += num;
  }

  console.log("합계: ", sum);
}

/** 콘솔에 3부터 30까지 3의 배수만 출력 */
function check9() {
  // 1
  let result = "";

  for(let num = 1; num <= 10; num++) {
    result += (num * 3 + ' ');
  }

  console.log(result);

  // 2. for문 + if문
  let result2 = "";

  for(let num = 3; num <= 30; num++) {
    if(num % 3 === 0) {
      result2 += num + " ";
    }
  }

  console.log(result2);
}

/** 입력받은 범위 내 지정된 수의 배수와 합계 출력 */
function check10() {
  const a = Number(document.getElementById("start10").value);
  const b = Number(document.getElementById("end10").value);
  const c = Number(document.getElementById("multiple10").value);

  let sum = 0;
  let result = "";

  for(let i = a; i <= b; i++) {
    if(i % c === 0) {
      result += i + " ";
      sum += i;
    }
  }

  console.log(`${a}부터 ${b}까지의 ${c}의 배수: ${result}`);
  console.log("합계: ", sum);
}

/** 구구단 2단 출력 */
function check11() {
  for(let i = 1; i <= 9; i++) {
    console.log(`2 x ${i} = ${i * 2}`);
  }
}

/** 입력받은 단의 구구단 출력 */
function check12() {
  const dan = document.getElementById("input12").value;
  const danNum = Number(dan);

  if(dan.length === 0) {
    alert("단을 입력하세요.");
    return;
  }

  if(danNum < 2 || danNum > 9) {
    alert("2 ~ 9단 사이만 입력하세요.");
    return;
  }

  for(let i = 2; i <= 9; i++) {
    console.log(`${danNum} x ${i} = ${danNum * i}`); // 문자열 * 숫자 = 숫자: 자동으로 숫자로 변환 -> JavaScript에서는 danNum을 선언할 필요없음
  }
}

/** 10부터 1까지 1씩 감소하며 출력 */
function check13() {
  for(let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

/** 20부터 3까지 3씩 감소하며 출력 */
function check14() {
  for(let i = 20; i >= 3; i -= 3) {
    console.log(i);
  }
}

/** 구구단 3단 거꾸로 출력 */
function check15() {
  for(let i = 9; i >= 2; i--) {
    console.log(`3 x ${i} = ${3 * i}`);
  }
}

/** 5의 배수마다 @, 10의 배수마다 줄바꿈하면서 출력 */
function check16() {
  let result = "";

  for(let i = 1; i <= 30; i++) {
    if(i % 5 === 0) {
      result += "@" + " ";
    } else {
      result += i + " "
    }

    if(i % 10 === 0) {
      result += "<br>"
    }
  }

  document.getElementById("result16").innerHTML = result;
}