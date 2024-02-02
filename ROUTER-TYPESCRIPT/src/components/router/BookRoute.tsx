
import {Routes,Route} from "react-router-dom"
import { Books } from '../Books'
import { NewBook } from '../NewBook'
import { BookLayout} from '../BookLayout'
import { SearchBook } from "../SearchBook"

export const BookRoute = () => {
  return (
   <>

   <Routes>
     <Route path="/" element={<BookLayout />} >
        <Route path=":id" element={<Books />} />
        <Route path="search/:id" element={<SearchBook />} />
        <Route path="newbook" element={<NewBook />} />
      </Route>
   </Routes>

   </>
  )
}
