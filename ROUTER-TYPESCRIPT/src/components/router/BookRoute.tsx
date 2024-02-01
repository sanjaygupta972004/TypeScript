
import {Routes,Route} from "react-router-dom"
import { Books } from '../Books'
import { NewBook } from '../NewBook'
import { BooKLayout } from '../BookLayout'

export const BookRoute = () => {
  return (
   <>

   <Routes>
     <Route path="/" element={<BooKLayout />} >
        <Route path=":id" element={<Books />} />
        <Route path="newbook" element={<NewBook />} />
      </Route>
   </Routes>

   </>
  )
}
