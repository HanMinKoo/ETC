//async await이 프로미스를 깔끔하게 사용하기 위해 나왔다 하지만,
//무조건 프로미스를 async await으로 대체해서 사용하는 것은 아니다.
//프로미스를 유지해야하는 경우가 있고, async await으로 깔끔하게 해야할 때가있다.


//async를 쓰면 함수의 코드 블럭이 자동으로 promise로 변함
async function fetchUser(){
    return 'm9';
}
//==>>>> 이게 프로미스일때는
// function fetchUser(){
//     return new Promise((resolve,reject)=>{
//         resolve('m9');
//     });
// }

const user = fetchUser();
user.then(value => console.log(value)); 


//2. await

function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));

}
async function getApple(){
    await delay(1000); //await은 async가 붙은 함수 안에서만 사용할 수 있다.
                        //await을 쓰면 delay가 끝날 때 까지 기다려준다.
    return 'apple';
}

async function getBanana(){
    await delay(1000); //
    return 'banana';
}

// //==>>>>프로미스로 바꿔보면
// function getBanana(){
//     return delay(3000)
//     .then(()=>"banana");
// }


// function pickFruits(){
//     return getApple().then(apple =>{
//         return getBanana().then(banana => `${apple}+${banana}`);
//     });
// }
//==>>async로 바꾸기

async function pickFruits(){
    // const apple = await getApple(); //1초 기다린후
    // const banana = await getBanana(); //또 1초 기다림. 그럼 총 2초 기다린거야.
    //그러면 엄청 시간을 오래 걸리는 작업이면 손해잖아 이거.

    //그래서 병렬 처리를 해준다면
    const applePromise = getApple(); //프로미스를 만드는 순간 프로미스의 코드블럭이 바로 실행된다. 그걸 이용한다, async가 return 하고 있으니깐.. promise 를 반환해서만든거지
    const bananaPromise = getBanana();
//이렇게 프로미스 만들자 마자 getapple과 getbanan의 함수가 실행된다.
//그래서 병렬적으로 만든 다음에 아래에서 await으로 동기적으로 만들어서 한번에 받는다 1초만에!


    //위에서 바로 프로미스 실행되고,
    //여기서 동기화 시켜준다.
    //
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple}+${banana}`
}
//이걸 이렇게도 안짜고 한번에 받아오는 Promise.all api가 있는데, 이건 뭐 나중에 만들 때 참고하자.


pickFruits().then(value => console.log(value));