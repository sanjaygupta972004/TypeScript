import React, {createContext,useContext,useState} from "react";


type authContextProps = {
   children : React.ReactNode
}

type authProps = {
   name : string,
   email : string,
}

 export type authContextType = {
   user : authProps | null,
   setUser : React.Dispatch<React.SetStateAction<authProps | null>>
}


const AuthContext = createContext< authContextType | null>(null);


export const AuthProvider = ({children}:authContextProps) => {
   const [user,setUser] = useState<authProps | null>(null);


   return (
  < AuthContext.Provider value={{user,setUser}}>
   {children}
  </AuthContext.Provider>
   )
}

export const useAuth = () => {
   return useContext(AuthContext);
}
