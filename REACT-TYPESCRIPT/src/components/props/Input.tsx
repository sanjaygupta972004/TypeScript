import React from "react"

type inputProps = {

   handleInput(event:React.ChangeEvent<HTMLInputElement>):void
}

const Input = (props:inputProps) => {
  return (
    <div>

     <input type="text" 
      onChange={(event)=> props.handleInput(event)} 

     />

    </div>
  )
}

export default Input