let score :  Array<number> = [1,2,3,4,5,6,7,8,9,10]
let names  : Array<string> = ["Sanjay", "Sunny", "Sneha", "Sachin", "Sachin"]

function identityOne(val : boolean |number) {
   return val
}

function identityTwo(val : any) : any {
   return val
}

function identithyThree<Type>(val : Type) : Type {
   return val
}

//identithyThree(false)

const identityFour = <T>(val : T) : T => {
   return val
}

interface bootle {
   name : string
   price : number

}  


identityFour<bootle>({
   name : "Sunny",
   price : 100
})    


function getProducts<T> (product :T[]):T{

   return product[0]
}

interface database {
   connection : string,
   password : string,
   dbname : string,
}


const anotherFunction = <T , U extends database>(val1 : T, val2:U) : object => {
   return val2
}

anotherFunction<string, database>("", {
   connection : "localhost",
   password : "password",
   dbname : "dbname"
})

interface Quiz {
   name : string,
   subject : string
}

interface course {

   subject : string,
   duration : number,
   author : string
}


class sellCourse<T>{
   public course : T[] = []
    
      constructor(course : T[]){
         this.course = course
      }

     addCourse(course : T){
      this.course.push(course)
    }

}

let course1 = new sellCourse<Quiz>([
   {
      name : "Sunny",
      subject : "Maths"
   }

])   


