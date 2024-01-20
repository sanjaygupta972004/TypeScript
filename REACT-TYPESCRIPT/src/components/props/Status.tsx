type  statusProps = {
   status : "loading"| "success" | "error"
}
const Status = (props:statusProps) => {

   let message;   
   if(props.status === "loading"){
      message = "Loading..."
   } else if(props.status === "success"){
      message = "Data fetched successfully"
   } else if(props.status === "error"){
      message = "Error fetching data"
   }

  return (
    <div>message- {message}</div>
  )
}

export default Status