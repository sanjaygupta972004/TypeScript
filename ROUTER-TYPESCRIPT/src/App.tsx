
import { Routes,Route } from "react-router-dom"
import { Home } from "./components/Home"
import { Book } from "./components/Book"
import { BookNav } from "./components/BookNav"
import { BookRoute } from "./components/router/BookRoute"


function App() {


  return (
    <>
      <BookNav />
      
      <Routes>
         <Route path="/"  element={<Home />} />
         <Route path="/book" element={<Book />} />
         <Route path="/books*" element ={<BookRoute/>} />
      
      </Routes>
    </>
  )
}

export default App
