import { useParams } from "react-router-dom"

export const SearchBook = () => {
   
   const {id} = useParams<{id:string}>()

   let n = new URLSearchParams(window.location.search).get('n');  
   
  return (
   <>
    <div>SearchBook {id}</div>
      <div>SearchBook {n}</div>
   </>
  )
}
