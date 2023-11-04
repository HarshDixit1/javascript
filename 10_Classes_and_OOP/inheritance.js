class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,age,phoneNum){

        super(username) 
        this.age=age;
        this.phoneNum=phoneNum;
    }

    addCourse(){
        console.log(`A new coursse added by ${this.username}`);
    }
}

const info=new Teacher("Alakh panday","1212","2345678776543")

info.addCourse()
 
const info_1 = new User("spiderman")

info_1.logMe()

console.log(info instanceof User);

