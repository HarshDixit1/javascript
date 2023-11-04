function SetUserName(username){

    // DB call
    this.username=username
}

function createUser(username,email,passwd){

    SetUserName.call(this,username)
    this.email=email;
    this.passwd=passwd


}

const print=new createUser("harsh","example@com",12121)
console.log(print);