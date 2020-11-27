//Promise는 클래스다.
//resolve일 때 실행되는 함수,
//reject일 때 실행되는 함수를 지정해줘야한다.

//promise객체를 만든 순간 콜백 함수가 바로 실행됨.생성자니깐. 생성자는 객체 생성하자마자 실행되니깐.
//그니깐 api 요청할 때 이러면 큰일~ 원하지도않았는데 요청해버리니깐

/******프로미스 콜백의 첫번째 인자는 resolve이고, 두번째 인자는 reject이다.  ******/
/****** 그래서 resolve가 실행되면 then이 실행되고, reject가 실행되면 catch가 실행됨.******/
//또한, 굳이 resolve, reject라고는 지을 필요 없이 그냥 이름 막 지어도됨. 어차피 resolve역할과, reject역할이니.
const promise = new Promise((suc, reject)=>{  
    // setTimeout(()=>{
    //     suc('m9');
    // },2000)
    const test = 4;
    if(test ===2){
        suc('succeess');
    }
    else{
        reject(new Error('no no no no')); //new Error 클래스를 활용하면  no no no no 추력 후에 뭐가 에러인지 쭉 써있다.
        //reject('no no no no'); //이렇게만 출력하면 no no no no 만 출력된다.
    }
    //reject('m9');
});  

promise.then((value)=>{
    console.log(value);
}).then(()=>console.log("2번째로 찍히겠지"))
.catch((value)=>{ //참고로 catch는 then과 then사이에도 넣을 수 있다.
    console.log(value);
}).finally(()=>{
    console.log("실패든 성공이든 무조건 실행");
});



const fetchNumber = new Promise((resolve1, reject1)=>{
    setTimeout(()=>{
        resolve1(1);
    },2000);
});
fetchNumber.then(num => num * 2) //이렇게 한줄로 표현하면 return 생략된 거잖아. 근데, 이렇게 리턴 때리면 다음 then의 매개변수로 값이 넘어감.오오....
.then(num => num * 3)
.then(num => {
    return new Promise((resolve2, reject2)=>{  //then을 통해 값을 바로 전달해도 되지만, 또 새로운 promise를 만들어서 다음 then으로 전달해도 된다.
        setTimeout(()=> resolve2(num-1,'z'),1000);
    });
}).then((num,value) => console.log(num,value));


const getEgg = hen =>  //이렇게 매개변수를 받아서 전달할 수도 있다.
    new Promise((resolve,reject)=>{
        resolve(hen);
    });

//위에처럼 작성 안할꺼면
// const getEgg = hen =>{  
//     return new Promise((resolve,reject)=>{
//         resolve(hen);
//     });
// }

getEgg("henhen").then((test)=>{
    console.log(test);
})