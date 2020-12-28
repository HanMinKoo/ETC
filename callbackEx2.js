//callback hell example

class UserStorage{
    loginUser(id, password){
        return new Promise((sucess, error)=>{
            setTimeout(()=>{
                if(id === 'm9' && password === "999")
                    sucess(id);
                else
                    error(new Error('not found'));
            },2000);
        });
        
    }
    getRoles(user){
        return new Promise((success, error)=>{
            setTimeout(() =>{
                if(user === 'm9'){
                    success({name: 'm9', role:'admin'});
                }
                else{
                    error(new Error('no access'));
                }
            }, 1000);

        });
    }
}

const userStorage = new UserStorage();
const id = 'm9';
const passsword = '999';

userStorage.loginUser(id,passsword)

//이 then을 축약하자면 .then(userStorage.getRoles)
.then((user)=>{// return 써야지 지금은. 왜냐하면 한줄이 아니잖아. 괄호를 써줬잖아. 괄호를 써줬으니깐. 만약 한줄로 쓴다면 return 쓸필요가 없지.
    return userStorage.getRoles(user);
})
.then((object)=>{ //이것도 한줄로 쓴게 아니라 괄호를 써줘서 여러줄이 된거니깐 return 써줘야지.
    return console.log(object.name, object.role);
})
.catch(error=>console.log(error)) //.catch(console.log) 로 축약할 수 있음. 매개변수와 인자가 같으니깐.
.finally(()=>{
    console.log('test');
});


// userStorage.loginUser(
//     id,
//     passsword, 
//     user =>{
//         userStorage.getRoles(
//             user,
//             userWithRole =>{
//                 console.log(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
//             },
//             error=>{
//                 console.log(error)
//             }
//         );
//     },
//     error =>{console.log(error)}
// );