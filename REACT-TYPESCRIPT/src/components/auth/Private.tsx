import React from 'react'
import Login from './Login'

import { profileProps } from './Profile'

type privateProps = {
   isLoggedin: boolean;
   component: React.ComponentType<profileProps>;
   
}

const Private = ({isLoggedin, component:Component} :privateProps) => {
  return (
    <div>
      {isLoggedin ? <Component name = "sunny" /> : <Login />}

    </div>
  )
}

export default Private