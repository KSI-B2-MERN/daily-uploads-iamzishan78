import { useState } from "react"
import Login from "./components/login"
import Sigup from "./components/signup"

function App() {
  const [signup, setSignup] = useState(false)
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  return (
    <>
      {/* <Login/>
      <Sigup/> */}
      {!signup &&
        <div className="h-screen w-screen grid place-content-center">
          <div>
            <h2 className="pb-4 color-rgb(0,0,0) text-3xl flex justify-center bg-slate-40">LogIn Here</h2>
            <form action="">
              <div className="pb-2">
                <div>
                  <label className="text-xl">Enter Email</label>
                </div>
                <input className="w-96 m-2 p-1 outline-none border-0 border-2 border-slate-400 rounded-xl" required type="email" placeholder="abc@gmail.com" onChange={(e) => {
                  console.log("SetEmail", setEmail)
                  setEmail(e.target.value)
                }} />

              </div>
              <div>
                <div>
                  <label className="text-xl">Enter Password</label>

                </div>
                <input className="w-96 m-2 p-1 outline-none border-0 border-2 border-slate-400 required rounded-lg" type="password" placeholder="********" onChange={(e) => {
                  setPassword(e.target.value)
                }} />

              </div>
              <p className="m-2 text-base md:hover:cursor-pointer" onClick={()=>{
                setSignup(true)
              }}>Don't Have An Account! SignUp</p>
              <div className="flex justify-center">
                <button type="submit" className="mt-4 bg-blue-500 w-60 disabled:bg-blue-100" disabled={!(email, password)} onClick={
                  ()=>{
                    console.log(email,password)
                  }
                }>
                  LogIn</button>
              </div>
            </form>
          </div>
        </div>}
      {/* ------------------------------------------------------------------ */}

      {signup && <div className="h-screen w-screen grid place-content-center">
        <div>
          <h2 className="pb-4 color-rgb(0,0,0) text-3xl flex justify-center bg-slate-100x" required>Sign Up Here</h2>
          <form action="">
            <div className="pb-2">
              <div>
                <label className="text-xl">Enter First Name</label>
              </div>
              <input className="w-96 m-2 p-1 outline-none border-0 border-2 border-slate-400 rounded-xl" type="text" placeholder="first name" required
                onChange={(e) => {
                  console.log("value",e)
                  setfname(e.target.value)
                }}
              />
            </div>

            <div className="pb-2">
              <div>
                <label className="text-xl">Enter Last Name</label>
              </div>
              <input className="w-96 m-2 p-1 outline-none border-0 border-2 border-slate-400 rounded-xl" type="text" placeholder="last name" required onChange={(e) => {
                  setlname(e.target.value)
                }}/>

            </div>
            <div className="pb-2">
              <div>
                <label className="text-xl">Enter Email</label>
              </div>
              <input className="w-96 m-2 p-1 outline-none border-0 border-2 border-slate-400 rounded-xl" type="email" placeholder="abc@gmail.com" required 
              onChange={(e) => {
                setEmail(e.target.value)
              }}/>

            </div>

            <div>
              <div>
                <label className="text-xl">Enter Password</label>

              </div>
              <input className="w-96 m-2 p-1 outline-none border-0 border-2 border-slate-400 rounded-xl" type="password" placeholder="********" required 
              onChange={(e) => {
                setPassword(e.target.value)
              }}/>

            </div>
            <div>
              <div>
                <label className="text-xl">Enter Confirm Password</label>

              </div>
              <input className="w-96 m-2 p-1 outline-none border-0 border-2 border-slate-400 rounded-xl" type="password" placeholder="********" required 
              onChange={(e) => {
                setCPassword(e.target.value)
              }}/>

            </div>
            <p className="m-2 text-base md:hover:cursor-pointer" onClick={()=>{
                setSignup(false)
              }}>Have An Account!LogIn</p>
            <div className="flex justify-center">
              <button type="submit" className="mt-4 bg-blue-500 w-60 disabled:bg-blue-100" disabled={!(fname,lname,email,password,cpassword)} 
              >LogIn</button>
            </div>
          </form>
        </div>
      </div>}
    </>
  )
}

export default App
