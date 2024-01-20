
type PersonListProps = {
   name:{
      firstName: string,
      lastName: string,

   }[]
}

const PersonList = (props:PersonListProps) => {
  return (
    <div>
   {
      props.name.map((person)=>(

         <div  key = {person.firstName}
         >{person.firstName} {person.lastName}</div>
      ))

   }

    </div>
  )
}

export default PersonList