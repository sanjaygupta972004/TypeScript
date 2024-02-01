import { useOutletContext } from "react-router-dom"

type NewBookProps = {
   obj: string
}

export const NewBook = () => {
   const {obj} = useOutletContext<NewBookProps>()
  return (
    <div>NewBook {obj}</div>
  )
}
