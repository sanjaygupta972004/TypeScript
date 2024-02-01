import { useParams } from "react-router-dom"

export const Books = () => {
   const {id} = useParams()
  return (
    <div>Books {id} getting from url</div>
  )
}
