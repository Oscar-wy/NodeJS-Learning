
class User{
    constructor(){
        this.UUID = 0
        this.username = ""
        this.email = ""
        this.fname = ""
        this.lname = ""
        this.password = ""
    }
}

exports.Server = class{
    constructor(){
        this.Users = {"Test": new User}
    }
    AddUser(User){
        this.Users[User.username] = User
    }
    AuthUser(username){
        return this.Users[User.username]
    }
    LoginUser(username, password){
        if(this.Users[username]){
            let User = this.Users[username]
            if (User.password == password){
                return User
            }
        }
    }
    SignupUser(username, email, fname, lname, password){
        let curUser = new User()
        if (!this.Users[username]){
            curUser.UUID = 0
            curUser.username = username
            curUser.email = email
            curUser.fname = fname
            curUser.lname = lname
            curUser.password = password
            this.Users[username] = curUser
        }
    }
}