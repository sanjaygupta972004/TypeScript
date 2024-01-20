
type buttonProps = {
   handlerClick(event:React.MouseEvent<HTMLButtonElement> , id :number):void
}

const Button = (props : buttonProps) => {
  return (
    <button onClick={(event) => props.handlerClick(event,1)} >Button</button>
  )
}

export default Button