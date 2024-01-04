import { useState } from "react"
import Login from "../components/auth/login"
import Sigup from "../components/auth/signup"

function AuthLayout() {
  const [signup, setSignup] = useState(false)

  const updateSignup = (newState)=>{
    setSignup(newState)
  }

  return (
    <>
    {!signup && <Login updateSignup={updateSignup}/>}
    {signup && <Sigup updateSignup={updateSignup}/>}

    </>
  )
}

export default AuthLayout
