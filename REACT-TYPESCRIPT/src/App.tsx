
import Props from "./components/props/Props"
import { State } from "./components/hooks/State"
import { ThemeProvider } from "./components/hooks/context/ThemeConteext"
import  {AuthProvider} from "./components/hooks/context/AuthContext"

function App() {

  


  return (
    <>
    <ThemeProvider>
    <AuthProvider>
    <Props/>
    <State/>
    </AuthProvider>
    </ThemeProvider>
  
    </>
  )
}

export default App
