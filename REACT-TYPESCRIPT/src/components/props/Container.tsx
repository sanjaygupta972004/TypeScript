type styleProps = {
   style: React.CSSProperties
}

const Container = (props:styleProps) => {
  return (
    <div style={props.style}> this is a style container  </div>
  )
}

export default Container