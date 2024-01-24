import React from "react";

type inputProps = React.ComponentProps<"input">

const Input = (props:inputProps) => {

  return  <input {...props} />
    
  
}

export default Input