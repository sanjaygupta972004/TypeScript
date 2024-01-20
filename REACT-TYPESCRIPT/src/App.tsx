import Greet from "./components/Greet"
import Person from "./components/Person"
import PersonList from "./components/PersonList"

function App() {

  let personName = {
    firstName: "Bruce",
    lastName: "Wayne"
  }

  const personList =[
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
    </>
  )
}

export default App
