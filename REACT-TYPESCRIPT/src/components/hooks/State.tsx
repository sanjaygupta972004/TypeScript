
import Usestate from './state/Usestate'
import User from './state/User'
import Box from './context/Box'
import AuthUser from './context/AuthUser'
import DomRef from './useref/DomRef'


export const State = () => {
  return (
   <>
    <div>State</div>
      <Usestate />
      <User />
      <Box />
      <AuthUser/>
      <DomRef/>
   </>
    
  )
}
