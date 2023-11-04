// The constructor method is a special method of a class for creating and initializing an object
//  instance of that class.

/*class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptPassword(){
        return `${this.password}123@`

    }

    changeUsername(username){
        return `${this.username.toUpperCase()}`
    }
}


const info=new User("Ironman","iron@gmail.com","abcd")
console.log(info.encryptPassword());
console.log(info.changeUsername());*/


// behind the scene (if we don't have classes)

function User(username,email,password){
    this.username=username;
        this.email=email;
        this.password=password;
}

User.prototype.encryptPassword=function(){
    return `${this.password}1223@`
}


User.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}

const spiddy=new User("kite","kite12gmail.com","asdfg")
console.log(spiddy.encryptPassword());