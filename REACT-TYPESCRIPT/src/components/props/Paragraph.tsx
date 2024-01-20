 type  childrenProps = {
 children:React.ReactNode
 }

 const Paragraph = (props :childrenProps) => {
  return (
    <div>
      <h3> {props.children} </h3>
      <p>
         gettting child component in parent component
      </p>

    </div>
  )
}

export default Paragraph
