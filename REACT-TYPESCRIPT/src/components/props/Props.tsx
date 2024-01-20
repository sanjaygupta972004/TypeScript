
import Greet from "./Greet"
import Person from "./Person"
import PersonList from "./PersonList"
import Status from "./Status"
import Heading from "./Heading"
import  Paragraph  from "./Paragraph"
import Button from "./Button"
import Input from "./Input"
import Container from "./Container"


const Props = () => {
   let personName = {
      firstName: "Bruce",
      lastName: "Wayne"
    }
  
    const personList = [
      {
        firstName: "Bruce",
        lastName: "Wayne"
      },
      {
        firstName: "Clark",
        lastName: "Kent"
      },
      {
        firstName: "Diana",
        lastName: "Prince"
      }
    ]
  return (
    <>
        <Greet name = " roy" age = {29}/>
      <Person  {...personName}/>
      <PersonList name = {personList}/>
      <Status status = "error"/>
      <Paragraph>
         {<Heading/>}
      </Paragraph>
      <Button handlerClick = {(event ,id) => (
        console.log("clicked", event , id)
    )} />

    <Input handleInput={(event)=>(
      console.log("input"
      ,event.target.value)
    )} />

    <Container style = {{border:"1px solid red" , padding:"1rem"}}/>



    </>
  )
}

export default Props