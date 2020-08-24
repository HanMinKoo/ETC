console.log(this);  //빈 객체 출력, node.js에 window와 document 객체가 없기 때문.
//보통 브라우저에서의 전역객체는 window 이다.

// console.log(this, module.exports, exports); //{} {} {]}
// console.log(this === module.exports); //true
// console.log(this === exports);  // true
// console.log(module.exports ===exports);  //true

// //node에서의 this는 바로 module.exports ,exports 이다.



// console.log(global); // global 객체 정보 출력
// console.log(globalThis); //// global 객체 정보 출력

// console.log(this);  //{} 출력

// console.log(this===global); //false
// console.log(this===globalThis); //false



function global1(){
    console.log(this===global, this===module.exports);  //true false
}

const global2 = ()=>{
    console.log( this===global,this===module.exports); //false true (에로우 함수일 때는 this가 global을 안가르킴)
}

const global3 = function(){
    console.log( this===global,this===module.exports);  //true false
}
global1();
global2();
global3();


