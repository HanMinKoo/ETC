let car={                  //객체 리터럴
    gear:1,
    speed:150,
    name:'m9 car',
};
console.log(car.gear);
console.log(car.speed);
console.log(car.name);

let objFunctionObject={   //객체안에 함수와 객체
    a1:3,
    func: ()=>{
        console.log('저는 메소드에요!');
    },
    innerObj:{
        inObj1:'나는',
        inObj2:'내부객체!',
    },
};

objFunctionObject.func();
objFunctionObject.addProperty='addProperty';    //객체 속성 동적 추가
console.log(objFunctionObject.innerObj.inObj1);
console.log(objFunctionObject.innerObj.inObj2);
console.log(objFunctionObject.addProperty);


let person={};     // let person=new Object(); 이 방식으로도 빈 객체를 생성할 수 있다.
//let person=new Object();
person.age=10;        //빈 객체에 속성 동적 추가
person.height=180;
person.sex='man';
console.log(person.age);
console.log(person.sex);
console.log(person.height);


console.log(person);

delete person.age;      //객체의 속성 삭제
delete person.sex;
console.log(person);


function Student(grade,age){   //객체를 생성하기 위한 생성자 함수 
    this.grade=grade;
    this.age=age;
}

const StudentObj = new Student(3,18);   //생성자 함수를 활용한 객체 생성
console.log(Student);
console.log(StudentObj);
console.log(StudentObj.age);

// const StudentObj2=Student(6,36);    //new 키워드를 이용하지 않으면 생성자 함수로 객체를 만들 수 없다.
// console.log(StudentObj2);
// console.log(StudentObj2.grade);


class Me{                           //클래스
    constructor(name,age,height){
        this.name=name;
        this.age=age;
        this.height=height;
        this.weight=60;
    }
};

const myObj=new Me('m9',27, 174);   // 클래스를 활용한 객체 생성
console.log(myObj);
myObj.grade='A';
console.log(myObj);
