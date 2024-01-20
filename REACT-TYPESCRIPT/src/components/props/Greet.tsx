
type GreetProps = {
   name: string,
   age?: number
}

const Greet = (props:GreetProps) => {
  const {name,age} = props
  return (
    <div style={{margin:"30px"}} > hello mr. {name} ! {age} </div>
  )
}

export default Greet