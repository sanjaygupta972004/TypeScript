// object in typescript

let users={
     name:"abhinav pratap",
     email:"abhi34@gmail.com",
     isactive:true

}
// first method
function createUser({name:string, price:number,ispaid:boolean}){
return newuser
}
let newuser={name:"john",price:222,ispaid:true}
createUser(newuser)


// second method
let usercourse=():{name:string, price:number,islogin:boolean,course:string}=>{
  return {name:"saurabh sharma",price:999,islogin:false,course:"python"}
}


// type aliases
// make custom type

type User={
     name:string,
     price:number,
     isActive:boolean,
     email:string
     // how to make optional datatype
     address?:string

}
const user ={name:"", price:999 ,isActive:true,email:""}

function createCondidate(user:User){

}

createCondidate(user)

export{}


