// function in typescript

function addtwo(num:number){
return num+2;
}

function getuser(name:string,email:string,isuserid:number,isuserlogin:boolean=true){

}
let gethello=(s:string):string =>{
     return s;
}


function consoleerror(errmsg:string):void{
 console.log(errmsg)
 
}


function errorhandle(errmsg:string):never{
   throw new Error(errmsg)
}


let coursename=["javascript","python","c#","java","machinelearning"];

 let findcourse=coursename.map((value):string=>{
     return`here is course ${value}`
     //return 4

})

console.log(findcourse) 



 let myvalue= addtwo(4);
 console.log(myvalue)
getuser("john","john34@gmail.com",3343443);
gethello("hello india")
consoleerror("some syntax error")
errorhandle("not identify variable ")

export{}