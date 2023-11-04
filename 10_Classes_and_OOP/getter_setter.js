class student{
    constructor(name,Id_num,schl_name){
        this.name=name;
        this.Id_num=Id_num;
        this.schl_name=schl_name;
    }

    get Id_num(){   // always return the value in getter
        return this._Id_num

    }

    set Id_num(val){  // we have to pass parameter always in setter
        this._Id_num=val;   // _(underscore )used to make private
    }
}

const info=new student("Rolex",512343,"DPSI")
console.log(info.name);