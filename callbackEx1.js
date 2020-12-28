//callback hell example

class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if( (id === 'm9' && password === "999") || (id === "han" && password ==='minkoo')){
                onSuccess(id);
            }
            else{
                onError(new Error('not found'));
            }
        },2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(() =>{
            if(user === 'm9'){
                onSuccess({name: 'm9', role:'admin'});
            }
            else{
                onError(new Error('no access'));
            }
        }, 1000);

    }
}

const userStorage = new UserStorage();
const id = 'm9';
const passsword = '999';
userStorage.loginUser(
    id,
    passsword, 
    user =>{
        userStorage.getRoles(
            user,
            userWithRole =>{
                console.log(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error=>{
                console.log(error)
            }
        );
    },
    error =>{console.log(error)}
);