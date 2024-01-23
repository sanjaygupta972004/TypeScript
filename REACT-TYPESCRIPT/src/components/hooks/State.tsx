
import Usestate from './state/Usestate'
import User from './state/User'
import Box from './context/Box'
import AuthUser from './context/AuthUser'
import DomRef from './useref/DomRef'

import Private from '../auth/Private'
import Profile from '../auth/Profile'

import Lists from '../generic/Lists'



export const State = () => {
  return (
   <>
    <div>State</div>
      <Usestate />
      <User />
      <Box />
      <AuthUser/>
      <DomRef/>
      <Lists
       items={[1,3,4,5,5,]} 
       onClick={(item) => console.log(item)}
       />
          <Lists
       items={["a","b","c","d","e",]} 
       onClick={(item) => console.log(item)}
       />

       

      <Private isLoggedin={true} component={Profile} />
   </>
    
  )
}
