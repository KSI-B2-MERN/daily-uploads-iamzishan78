import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthLayout from './layouts/auth-layout'

import './index.css'
import Home from './layouts/admin-layout'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    {/* <AuthLayout/> */}
    <Home/>
    
    {/* <Test/> */}
  </React.StrictMode>,
)
