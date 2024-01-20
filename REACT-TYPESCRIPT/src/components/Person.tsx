
type PersonProps = {
  firstName: string,
  lastName: string
}



 const Person = (props : PersonProps) => {
  return (
    <div>{props.firstName} {props.lastName} </div>
  )
}

export default Person
