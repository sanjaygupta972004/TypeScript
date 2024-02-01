import { BookList } from './BookList'
import { Outlet , Link} from 'react-router-dom'

export const BooKLayout = () => {
  return (
   <>
     <h2>BookLayout</h2>
      <BookList />
      <br/>
     <nav>
      <Link to = "/books/1" >Book</Link>
      <br/>
      <Link to = "/books/newbook" >newBook</Link>

     </nav>
     
     
      <Outlet context={{
        obj:"hello"
      }}/>
    </>
  )
}
