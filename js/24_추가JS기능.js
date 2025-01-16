const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
  const obj = {
    menu: "제육볶음",
    price: 8000,
    option: {
      spicy: ["기본", "맵게", "아주 맵게"],
      rice: ["기본", "곱빼기", "곱곱빼기"]
    }
  };

  for(let key in obj) {
    // console.log(key);
    console.log(`obj[${key}]: ${obj[key]}`);

    if(key === "option") {
      for(let key2 in obj[key]) {
        console.log(key2, obj[key][key2]);
      }
    }
  }
});


const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
  const fruits = ['사과', '바나나', '오렌지'];

  // const first = fruits[0];
  // const second = fruits[1];
  // const third = fruits[2];

  // 위 변수 선언/대입 구문을 구조 분해 할당으로 변경
  const [first, second, third] = fruits;

  console.log("first: ", first);
  console.log("second: ", second);
  console.log("third: ", third);

  const person = {name: "홍길동", age: 25, height: 180};

  // const name = person.name;
  // const age = person.age;
  // const height = person.height;

  // 구조 분해 할당
  const {name, age, height} = person;

  console.log("name: ", name);
  console.log("age: ", age);
  console.log("height: ", height);
});


const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");

btn3.addEventListener("click", () => {
  const arr = [10, 20, 30];
  const copy1 = arr;

  console.log(arr);
  console.log(copy1);

  copy1[0] = 999; // 복사본의 0번 인덱스에 999 대입

  console.log(arr);
  console.log(copy1);

  // 왜 arr[0]이 999로 변했을까?
  // 얕은 복사: 변수에 저장된 주소를 복사하여 여러 변수가 하나의 객체를 참조하는 것

  // 깊은 복사: arr이 참조하는 값을 얻어와 새로운 배열을 생성
  const copy2 = [...arr];

  copy2[1] = 1234;

  console.log(arr);
  console.log(copy1);
  console.log(copy2);

  const students1 = ["홍길동", "둘리", "또치"];
  const students2 = ["짱구", "유리", "맹구"];
  const students3 = [...students1, ...students2];

  console.log(students3); // 전개 연산자를 활용해서 1차원 배열 2개를 결합해 1차원 배열을 만듦

  const students4 = [...students3, '철수', '희동'];

  console.log(students4);
});

btn4.addEventListener("click", () => {
  // 객체 복사
  const obj = {id: "user01", pw: "pass01"};
  const copy1 = obj; // 얕은 복사
  const copy2 = {...obj}; // 깊은 복사

  copy1.pw = "1q2w3e4r";

  console.log(obj);
  console.log(copy1);
  console.log(copy2);

  // 객체 병합
  const obj2 = {id: "user02", pw: "pass02"};
  const obj3 = {email: "user02@gmail.com", phone: "01012341234"};

  const obj4 = {...obj2, ...obj3};

  console.log(obj4);

  // 속성 덮어쓰기
  const obj5 = {...obj4, phone: "01051321514"};

  console.log(obj5);
});