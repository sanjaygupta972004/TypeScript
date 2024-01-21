
import  { useState } from 'react'

const Usestate = () => {

   const[isLoggedin, setIsLoggedin] = useState(false)


   const handlerLogin = () => {
      setIsLoggedin(true)
     
   }

   const handlerLogout = () => {
      setIsLoggedin(false)

   }

  return (
   <div>
      <h1> useState in ts </h1>
      <button onClick={handlerLogin}> Login </button>
      <button onClick={handlerLogout}> Logout </button>
      <p> user  { isLoggedin? "logIn" :"logOut"  }</p>
   </div>
    
  )
}

export default Usestate