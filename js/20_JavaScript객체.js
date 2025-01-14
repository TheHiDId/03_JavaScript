// JS 객체 생성 + 다루기
const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
  // 1. 객체 생성
  // - {}: 객체 리터럴을 이용한 생성 

  // Key는 무조건 string 타입 -> "" '' 없이도 string으로 인식함
  const product = {
    "productName": "새우깡",
    'brand': '농심',
    price: 1700
  };

  console.log("product: ", product);

  // new Object(): 새 객체 생성
  const person = new Object();
  
  // 객체 내부에 값 추가하는 방법
  // 1. 객체명.key = value;
  person.name = "철수";
  person.age = "22";

  // 2. 객체명["key"] = value;
  person["height"] = 178.9;
  person["weight"] = 73.5;

  console.log("preson: ", person);

  // 생성된 객체 내부 값 얻어오는 방법
  // 1. 객체명.key: 일반적인 방법
  console.log(product.productName);
  console.log(product.brand);
  console.log(product.price);

  // 2. 객체명["key"]: key에 특수문자나 공백 포함 시 사용, for문과 같이 사용하는 경우
  console.log(product["productName"]);
  console.log(product["brand"]);
  console.log(product["price"]);


  // 2. 객체에 저장된 값 수정/삭제
  // - 수정: 객체.기존key = 새 value;, 객체["기존key"] = 새 value;
  product.price = 1500;
  person["age"] = 23;

  console.log("수정된 product: ", product);
  console.log("수정된 person: ", person);

  // - 삭제: 객체 내에서 key가 일치하는 요소(K:V) 삭제
  //   delete 객체명.key
  //   delete 객체명["key"]

  delete person.weight;
  console.log("삭제 확인: ", person);
});

// JS 객체에 메서드(함수) 추가
const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
  const student = {}; // 빈 객체 생성

  student.name = "홍길동";
  student.age = "20";

  // 객체에 대입되는 함수(메서드)는 화살표 함수 사용하지 말 것 -> this관련 문제 발생
  student.introduce = function() {
    const gender = "남자"; // {} scope

    // 저는 20세 남자 홍길동 입니다.
    alert(`저는 ${this.age}세 ${gender} ${this.name} 입니다.`);
  }

  student.introduce();

  // 메서드 추가
  student.study = function(subject) {
    const str = `${this.name}은 ${subject} 공부를 합니다.`;

    console.log(str);
  }

  // study 메서드 호출
  student.study("수학");
  student["study"]("영어");
});

// 생성자 함수
/** 학생 생성자 함수 정의 */
function Student(grade, classRoom, number, name) {
  // 전달받은 값을 생성된 객체의 필드로 대입
  this.grade = grade;
  this.classRoom = classRoom;
  this.number = number;
  this.name = name;

  // 메서드 생성
  this.inform = function() {
    let str = `${this.grade}학년 ${this.classRoom}반 ${this.number}번 ${this.name}`;

    return str;
  }
}

// 추가된 학생 객체를 모아둘 객체 배열 생성
const studentList = [
  new Student(1, 1, 1, "고현우"), 
  new Student(1, 1, 2, "김관민"),
  new Student(1, 1, 3, "김구남")
];

// 학생 추가 버튼 클릭 시 입력된 값을 모두 얻어와 학생 객체 배열(studentList)에 추가
const inputGrade = document.querySelector("#inputGrade");
const inputClassRoom = document.querySelector("#inputClassRoom");
const inputNumber = document.querySelector("#inputNumber");
const inputName = document.querySelector("#inputName");
const addStudent = document.querySelector("#addStudent");

addStudent.addEventListener("click", () => {
  // 입력된 값 모두 얻어오기
  const values = [
    inputGrade.value, 
    inputClassRoom.value, 
    inputNumber.value, 
    inputName.value
  ];

  // 입력되지 않은 값이 있는지 확인
  for(let val of values) {
    if(val.trim() === "") {
      alert("모든 값을 입력해주세요.");
      return;
    }
  }

  // 학생 객체 생성
  const std = new Student(Number(values[0]), Number(values[1]), Number(values[2]), values[3]);

  // 생성된 학생 객체를 학생 객체 배열 studentList의 제일 마지막으로 추가
  studentList.push(std); // 배열.push(값): 배열 마지막 요소로 추가

  // 추가 완료 후 input에 작성된 값 모두 제거
  inputGrade.value = "";
  inputClassRoom.value = "";
  inputNumber.value = "";
  inputName.value = "";

  inputGrade.focus(); // 초점 맞추기
});

// 학생 조회 버튼 클릭 시 studentList에 저장된 모든 내용을 #tbody에 요소를 만들어서 출력
const selectStudent = document.querySelector("#selectStudent");
const tbody = document.querySelector("#tbody");

selectStudent.addEventListener("click", () => {
  tbody.innerHTML = "";

  const createEl = (tag, text) => {
    const el = document.createElement(tag); // 요소 생성
    
    el.innerHTML = text; // 내용 추가

    return el;
  };

  //studentList를 반복 접근하면서 tr, th, td 요소를 만들어 추가
  studentList.forEach((std, index) => {
    // std: studentList에서 하나씩 꺼낸 학생 객체
    // index: 현재 index
    const tr = document.createElement("tr");

    const th = createEl("th", index + 1);
    const td1 = createEl("td", std.name);
    const td2 = createEl("td", std.grade);
    const td3 = createEl("td", std.classRoom);
    const td4 = createEl("td", std.number);

    tr.append(th, td1, td2, td3, td4);

    tbody.append(tr);
    
    // 이름이 작성된 요소(td1)가 클릭되었을 때
    td1.addEventListener("click", () => {
      alert(std.inform()); // inform 메서드 반환 결과를 alert 출력
    });
  });

  document.querySelector("#total").innerHTML = `${studentList.length}명`
});

/* 
  배열.forEach((item, index) => {
    // item: for문 반복 시 0 인덱스부터 차례대로 꺼낸 요소
    // index: 현재 반복 접근 중인 index
  });
*/

/* 
  this 참조 변수 위치에 따른 의미
  1. 객체 메서드에서 this: 현재 객체
  2. 이벤트가 발생된 요소 (화살표 함수 X)
    - <button onclick="testFn(this)">테스트</button>
    - btn.onclick = function(){console.log(this);}
    - btn.addEventListener("click", function() {
      console.log(this);
      });
  3. 일반 함수, 화살표 함수, 전역 변수에서 this: window 객체
*/

// JSON
const checkJson = document.querySelector("#checkJson");
checkJson.addEventListener("click", () => {
  // JS 객체 생성
  const user = {
    "id": "user01",
    "pw": "pass01",
    "email": "user01@naver.com",
    "phone": "010-1234-5678"
  };

  console.log("user: ", user, typeof user);

  // JSON.stringify(JS객체): JS 객체 -> JSON(문자열)
  console.log("JSON.stringify: ", JSON.stringify(user), typeof JSON.stringify(user));

  // JSON 직접 작성
  const menu = '{"name": "김밥", "price": 4000}'

  console.log("menu: ", menu, typeof menu);

  // JSON.parse(JSON문자열): JSON -> JS 객체
  console.log(JSON.parse(menu), typeof JSON.parse(menu));
});