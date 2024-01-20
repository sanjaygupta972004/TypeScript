
type GreetProps = {
   name: string,
   age?: number
}

const Greet = (props:GreetProps) => {
  return (
    <div style={{margin:"30px"}} > hello mr. {props.name} ! { props.age} </div>
  )
}

export default Greet