
interface User {
   readonly dbId: number;
      name: string;
      password?: string;
      userId: number;
      email: string;
      setTrial(): string;
      getCoupen(coupenName: string): string;
}

interface User {
   githubToken: string;
}


interface Admin extends User {
   role :"admin"| "superadmin" | "user";
}


let jon : Admin = {
    role: "admin",
   dbId: 1,
   githubToken: "123",
   name: "Jon",
   userId: 123,
   email: "j10@gmail.com",
   setTrial: function() {
      return "Trial";
   },
   getCoupen: (name= "some") : string => {
      return "Coupen";
   }
}


console.log(jon.getCoupen("sanjay")); 


export{}
