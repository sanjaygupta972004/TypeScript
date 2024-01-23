
function getId (id :string | null | number ){
   if(id){
   if(typeof id === "string"){
       return id.toUpperCase()
   } else if (typeof id === "number"){
       return id
   }

}
   return id
}

getId("hello")