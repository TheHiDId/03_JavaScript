// 변수 선언: 값을 저장하기 위한 공간 생성
var number1;
var number2;

// 변수에 값 대입: 생성된 공간에 원하는 값을 넣기
// 변수명 = 값; -> 오른쪽 값을 왼쪽 변수에 대입
number1 = 10;
number2 = 20;

// var: 변수(값 변경 가능), 변수명 중복 가능, 함수 레벨 범위
function varCheck() {
  var menu = "새우볶음밥";
  console.log("Menu: ", menu);
  // var 키워드 없이 값 변경 확인
  menu = "제육덮밥";
  console.log("Menu: ", menu);
  // var 키워드 포함, 변수명 중복 확인
  var menu = "오징어덮밥";
  console.log("Menu: ", menu);
  // var 사용 시 문제점: 잘 사용 중이던 변수를 실수로 없애는 경우가 발생
}

// let: 변수(값 변경 가능), 변수명 중복 불가능, 블록({}) 레벨 범위 -> var의 문제점을 해결
function letCheck() {
  let name = "백종엽"; // 변수 선언하고 백종엽 대입
  console.log("Name: ", name);
  name = "고현우"; // 값 변경 가능 확인
  console.log("Name: ", name);
  // let name = "이성준"; // 변수명 중복 불가능 확인
  // 블록 범위 변수 'name'을(를) 다시 선언할 수 없습니다.ts(2451)
  // 해결 방법: 다른 이름의 변수에 저장
  let name2 = "이성준";
  console.log("Name: ", name2);
}

// const: 상수(값 변경 불가능), 변수명 중복 불가능, 블록({}) 레벨 범위
function constCheck() {
  const nationalCode = 82;
  console.log("National Code: ", nationalCode);
  nationalCode = 1; // 상수이기 때문에 값 변경 불가능 (Uncaught TypeError: Assignment to constant variable.)
  console.log("National Code: ", nationalCode);
  // const nationalCode = 1; // 변수명 중복 불가능 확인
}

// var, let, const 범위(scope) 확인
function scopeTest1() { // 함수 선언
  // 함수 정의
  // var
  var num1 = 100;
  // if( num1 === 100 ) {}: 만약에 num1과 100이 같다면 {}(블록)을 수행
  if( num1 === 100 ) {
    var num2 = 200; // var를 이용해서 num2 변수를 선언
  }
  console.log("num2: ", num2); // num2: 200 출력 성공

  // let
  let num3 = 300;
  if( num3 === 300 ) {
    let num4 = 400; // {} 내부에서 선언했으므로 {}을 벗어나면 사용 불가능 (블록 레벨 범위 특징)
  }
  console.log("num4: ", num4) // Uncaught ReferenceError: num4 is not defined
}
// scopeTest1(); // 함수 호출

// 변수 선언 위치에 따른 범위
/* 
  1. 전역(global) 변수
    - 어디서든 사용 가능한 변수

  2. 지역(local) 변수
    - {}(블록) 내부에 작성된 변수
*/

// 전역 변수 선언 (기본적으로 {} 밖에 선언)
const global1 = "전역 변수 1";

function scopeTest2() { // 함수 선언
  // 함수 정의
  const fn1 = "함수 지역 변수 1"
  let   fn2 = "함수 지역 변수 2"

  const temp = 123; // 임시 변수

  console.log("if 실행 전 fn2: ", fn2);

  if( temp === 123 ) { // if문 선언
    // if 정의
    console.log("if 내부에서 fn2: ", fn2);
    console.log("전역 변수 global1: ", global1);

    // {} 바깥쪽 변수 값을 {} 내부에서 변경하면 어떻게 될까?
    fn2 = "변경된 fn2";
    console.log("fn2 변경 확인: ", fn2);
  }
  console.log("if 종료 후 fn2 값: ", fn2);

  const name = "백종엽"; // 상수, 함수{} 블록 레벨

  console.log("if 전 name: ", name);

  if( temp === 123 ) {
    const name = "김동율"; // {} 바깥쪽과 안쪽의 변수명이 같으면 안쪽의 우선순위가 높음
    console.log("if 중 name: ", name);
  }

  console.log("if 후 name: ", name);
}
// scopeTest2(); // 함수 호출

// 자료형 확인
function typeCheck() {
  // typeof 연산자: 변수나 값의 자료형을 확인하는 연산자
  // undefined: 정의되지 않음 == 변수에 값 대입이 안됨
  let undef;
  console.log("undef: ", undef, typeof undef);

  // string: 문자열 == '', "" 로 작성된 리터럴(값)
  const name = "백종엽";
  const phoneNum = '01012341234';

  console.log("name: ", name, typeof name);  
  console.log("phoneNum: ", phoneNum, typeof phoneNum);

  // number: 숫자 == 정수 또는 실수 형태의 리터럴
  const age = 24;
  const height = 179.9;
  const sight = -5.5;
  
  console.log("age: ", age, typeof age);
  console.log("height: ", height, typeof height);
  console.log("sight: ", sight, typeof sight);

  // boolean: 논리값 == true(참) or false(거짓)
  const bool1 = true;
  const bool2 = false;

  console.log("bool1: ", bool1, typeof bool1);
  console.log("bool2: ", bool2, typeof bool2);

  // object: 객체 == 값을 여러개 저장할 수 있는 형태

  // 1. 배열(Array): 변수의 묶음, 묶인 변수의 0부터 1씩 증가하는 숫자를 부여(index)
  const numbers = [11, 22, 33]; // 배열 생성
  
  // 배열 전체 타입 검사
  console.log("numbers: ", numbers, typeof numbers);

  // 배열 내 요소(저장된 값) 하나씩 꺼내기
  console.log("numbers[0]: ", numbers[0], typeof numbers[0]);
  console.log("numbers[1]: ", numbers[1], typeof numbers[1]);
  console.log("numbers[2]: ", numbers[2], typeof numbers[2]);

  // 2. JS 객체 {k:v, k:v, k:v}
  // k(key) == 값을 구분하는 이름(변수명과 비슷)
  // v(value) == 값 자체(변수에 대입되는 값)
  const user = {
    id: "user01",
    pw: "pass01",
    point: 13000
  }

  console.log("user: ", user, typeof user);

  console.log("user['id']: ", user['id'], typeof user['id']);
  console.log("user['pw']: ", user['pw'], typeof user['pw']);
  console.log("user['point']: ", user['point'], typeof user['point']);

  // 3. 함수: 함수도 변수에 대입이 가능함
  function sumFn(a, b) {
    return a + b;
  }

  console.log("sumFn: ", sumFn, typeof sumFn);

  //sumFn 함수 호출
  console.log(sumFn(111, 987));
  console.log(sumFn(3, 5));
  console.log(sumFn(-111, 321));
}