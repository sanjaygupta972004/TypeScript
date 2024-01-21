
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

class User {

   constructor(public name: string, private userId: number, private email: string){
      name;
      userId;
      email;
   }

   get userEmail() : string{
      return this.email;
   }

   set userEmail(email: string){
      if(!email || email.length === 0){
      throw new Error("Email cannot be empty")
      }
      this.email = email;
   }

   private deleteToken = (): void => {
      console.log("Token deleted")
   }

}

let user1 = new User("Sanjay", 1, "cjdk@gmail.com")
user1.name = "Sunny"

//console.log(user1)

user1.userEmail = "hgfv"

console.log(user1.userEmail)



//user1.deleteToken()

console.log(user1.userEmail)

