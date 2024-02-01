import { Link, NavLink,NavLinkProps } from "react-router-dom"


  


export const BookNav = () => {
  return (
   <>
    <div>BookNav</div>
    <nav style={{display:"flex",gap:"20px"}}>
      <Link to="/" >Home</Link>
      <NavLink  to="/book"  replace >Book</NavLink>
      <NavLink to="/books" activeClassName="active">BookList</NavLink>
    </nav>

    </>
  )
}
