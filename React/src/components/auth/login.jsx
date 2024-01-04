import { useState } from "react"
import axios from "axios"
function Login(updateSignup) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const login=()=>{
  //   console.log("Work")
  // }
  // const login = async()=>{
  //   const loginResponse = await axios.post("https://localhost:3001/auth/logIn")
    
  // }
  const login = async()=>{
    try {
      const loginResponse = await axios.post("http://localhost:3001/auth/logIn",{
      email,
      password
    });

    console.log("login",loginResponse)

    if(loginResponse.data.error){
      return alert("Invalid Credentials1")
    }
    return alert("Login Successfully")
      
    } catch (error) {
      console.log("Invalid Credentials12")

      return{
        error:error
      }
      
    }
  }
  console.log(email,password)
    return (
      <>
        <div className="h-screen w-screen grid place-content-center">
          <div>
            <h2 className="pb-4 color-rgb(0,0,0) text-3xl flex justify-center bg-slate-40">LogIn Here</h2>
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <div className="pb-2">
                <div>
                  <label className="text-xl">Enter Email</label>
                </div>
                <input className="w-96 m-2 p-1 outline-none border-2 border-slate-400 rounded-xl" required type="email" placeholder="abc@gmail.com"
                 onChange={(e)=>{
                
                  setEmail(e.target.value)
                }}/>
                
              </div>
              <div>
                <div>
                  <label className="text-xl">Enter Password</label>

                </div>
                <input className="w-96 m-2 p-1 outline-none  border-2 border-slate-400 required rounded-lg" type="password" placeholder="********" 
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}/>

              </div>
              <p className="m-2 text-base md:hover:cursor-pointer" 
              onClick={()=> updateSignup.updateSignup(true)
              }>Don't Have An Account! SignUp</p>
              <div className="flex justify-center">
                <button type="submit" className="mt-4 bg-blue-500 w-60 disabled:bg-blue-100" 
                
                onClick={
                  login
                }
                disabled={
                  !(email && password)
                }>
                  LogIn</button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
  
  export default Login
  