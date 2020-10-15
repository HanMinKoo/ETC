// console.log(age);
// console.log("test");
// console.log("test");
// console.log("test");
// console.log("test");
//2. variable

//변수: 즉 변경될수 있는 값

//let (added in es6)

//전역 변수들은 어플리케이션이 실행되는순간부터 끝날때까지 항상 메모리에 탑재되어있기 때문에 최소한으로 쓰는것이 좋다.


//자바스크립트에서 변수를 선언할 수 있는것은 let 단 하나이다.
//그 전에는 var를사용했따. 
//var를 쓰지말라.
//var 를 쓰면 


//**이거 이렇게 하면 undefined(변수는 정의되어있지만 값이 아직 들어가있지 않음ㅁ0) 뜸;;; */
// console.log(age);
// age=4;
// console.log(age);
// var age;

// function testVar(){
//     var value=7;
//     console.log(value); //7

//     if(true){
//         let valueTwo=10;
//     }
//     console.log(valueTwo); //10
// }
// testVar();
// console.log(test);
// test='테스트';
// let test;
// if(true)
// {
//     var value=5;
// }
// console.log(value);
//console.log(value);
// //**이렇게하면 4마지막에 4라고뜸;;;; */
// console.log(age);
// age=4;
// console.log(age);
// var age;

// //말이안되잖아 선언하기도 전에 뜬다는게..

// //let은 이런거절대안됨. 무조건 선언해ㅏ고 써야함/.

// //그럼 이런일이 왜발생하냐? 이것의 문제는 바로
// //var hoisting 때문이다.
// //'hoisting이란 어느 위치에 선언했는지 상관없이 항상 제일 위로 선언을 끌어 올려주는것이 호이스팅이다' 

// //그래서 전역변수에 var를 선언했으니깐 console.log(age)를 맨 1번쨰 라인에 적으면 호이스팅때문에 undefined가 뜬다.





// //var를 사용하면 안되는2번째 이유
// //var는 block scope 없다.

// {

//     var duldul;
//     duldul=5;
// }
// console.log(duldul);

// //충격과 그 자체의 코드이다.
// //그래서 let도 스코프 안에서 선언하면 그 스코프 안에서만 작동하는데 var는그딴거없다.
// //만약 이따구가되면 소스코드가 몇만줄이 될때 그 때 발생한 오류를 잡기위해서는...정말 복잡하다.

// // {
// //     let test=7;

// // }
// // console.log(test);  // test is not defined 오류출력
// //이래서 let이 나옴


// //3. const
// //const는 상수라고 생각하면됨. 한번 설정하면 바꾸질 못함.
// //선언 후 바꾸지 못함
// //왜쓰냐 이걸 그럼
//   // (1) 보안상 이유: 한번 작성한 값을 다른 헤컥들이 코드를 이상한걸 삽입해서 값을 계속 변경해나갈수 있는데 const는 그것을 방지할수있다.age
//   //(2) thread safety: 프로그램이 실행되면 하나의 프로세스가 할당되는데, 이때 프로세스내에 다양한 쓰레드가 동시에 돌아가며 프로그램을 더욱 효율적이고 빠르게동작할수있도록 도와주는데, 이 다양한 쓰레드들이 동시에 변수에 접근해서 값을 변경하게 되면 위험하다. 그래서 값이 변하지 않은 것은 const를 통해 값을 변하지 못하게 막는다. 
//   //(3) 코드 변경할 때 실수 방지




//   //4. 변수 타입
//   //이건 정리했으니 패스

// //  `${}` << 템플릿 리터럴(템플릿 스트링)

// //null 이란 ? - 내가 명확하게 너는 텅텅빙어있는 empty 값인 변수야! 라고 지정된것을 뜻한다.
// //let nothing = null;   <<- 아무것도 아니다

// //undefined
// //let x= undefined;  //선언은 되었지만, 아무것도 값이 지정되어있지 않다. 
// //그래서 얘는 텅텅비었는지 값이 들어가있는지 정해지지 않은 상태.



// //symbol
// //나중에 자료구조에서 고유한 식별자가 필요하거나 다발적으로 일어날 수 있는 코드에서 우선순위를 주고싶을때 정말 고유한 식별자가 필요한 경우 사용
// //간혹 식별자를 string을 써서 사용하는 경우가있는데, string은 다른 모듈이나 파일에서 동일 한string을 썼을때 동이한 식별자로 간주된다.
// //하지만 symbol은 동일한 값을 이용해서 만들었찌만,다른 symbol로 인식하기 때문에 고유한 식별자를 만들때 사용한다
// //ex)
// const symbol1 = Symbol('id');
// const symbol2 = Symbol('id');
// console.log(symbol1===symbol2); //result: false;

//  //만약 동일한 symbol을 만들고 싶으면??
//  const gSymbol1 = Symbol.for('id');
//  const gSymbol2 = Symbol.for('id');
//  console.log(gSymbol1===gSymbol2); //result: true;

//  //symbol 주의사항
//  console.log(`value:${symbol1.description}`); //그냥 ${symbol1이라고 출력하면 에러가 뜨니깐} description을 활용해야한다.




//  //5. 다이나믹 타이핑  //프로그램 런타임에 할당된 값에 따라 타입이 변경.

