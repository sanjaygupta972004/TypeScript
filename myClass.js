// class User {
//    name: string
//    password?: string
//    private userId: number
//    public email: string
//    constructor(name: string, userId: number, email: string){
//       this.name = name;
//       this.userId = userId;
//       this.email = email;
//    }
// }
var User = /** @class */ (function () {
    function User(name, userId, email) {
        this.name = name;
        this.userId = userId;
        this.email = email;
        this.deleteToken = function () {
            console.log("Token deleted");
        };
        name;
        userId;
        email;
    }
    Object.defineProperty(User.prototype, "userEmail", {
        get: function () {
            return this.email;
        },
        set: function (email) {
            if (email && email.length === 0)
                throw new Error("Email cannot be empty");
            this.email = email;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user1 = new User("Sanjay", 1, "cjdk@gmail.com");
user1.name = "Sunny";
//console.log(user1)
user1.userEmail = "hgfv";
console.log(user1.userEmail);
//user1.deleteToken()
console.log(user1.userEmail);
