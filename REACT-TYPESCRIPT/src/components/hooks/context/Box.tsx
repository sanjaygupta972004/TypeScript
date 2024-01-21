
import { useTheme } from "./ThemeConteext"
const Box = () => {
   const theme = useTheme()
  return (
      <div style={{backgroundColor:theme.dark.background, color:theme.dark.foreground}}>
         <h1> Lorem ipsum dolor sit amet consectetur.</h1>
      </div>
  )
}

export default Box