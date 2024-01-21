import React from 'react'

type authUser = {
   name: string,
   email: string,
}


const User = () => {

   const[user, setUser] = React.useState<authUser | null>(null)

   const handlerLogin = () => {
      setUser({
         name: "Jonh",
         email: "john@gmail.com"
   
      })

   }

   const handlerLogout = () => {
      setUser(null)

   }


  return (

    <div>
      <h1> User </h1>
      <button onClick={handlerLogin}>login</button>
      <button onClick={handlerLogout}>logout</button>

      <h2> user name  {user?.name} </h2>
      <h3> user email {user?.email} </h3>

    </div>
  )
}

export default User