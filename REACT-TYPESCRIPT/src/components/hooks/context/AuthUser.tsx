
import { useAuth, authContextType } from "./AuthContext"

const AuthUser = () => {
   const {user,setUser} = useAuth() as authContextType ;

  
   console

   const handlerLogin = ()=> {
      setUser({
         name: "Ram",
         email:"Ram@gmail.com"
      })
   }

   const handlerLogout = () =>{
      setUser(null)
   }

  return (
    <div>AuthUser

      <div>
         <button onClick={handlerLogin}>  Login </button>
         <button onClick={handlerLogout}>  Logout </button>
         <h3>User Name {user?.name}</h3>
         <h4> User email { user?.email}</h4>
      </div>


    </div>
  )
}

export default AuthUser