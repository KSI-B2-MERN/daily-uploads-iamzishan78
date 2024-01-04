import { useState } from "react"
function Sigup(updateSignup){

  const [firstName, setfname] = useState("");
  const [lastName, setlname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [roleId,setRoleId]= useState("")
  const signUp = async()=>{
     try {
    const signupResponse = await axios.post("http://localhost:3001/user/createUser",{
    roleId,
    firstName,
    lastName,
    email,
    password,
    cPassword
    });
    console.log("Response",signupResponse)

    if(signupResponse.error){
      return alert("Invalid Credentails111")
    }
    return alert("Account Created Successfully")
      
     } catch (error) {
      console.log("user Not created1")
      return {
        error: error
      }
      
     }
        
  }
  
  return (
    <>
      <div className="h-screen w-screen grid place-content-center">
        <div>
          <h2 className="pb-4 color-rgb(0,0,0) text-3xl flex justify-center bg-slate-100x" required>Sign Up Here</h2>
          <form action="" onSubmit={(e)=>e.preventDefault()}>
            <div className="pb-2">
              <div>
                <label className="text-xl">Enter First Name</label>
              </div>
              <input className="w-96 m-2 p-1 outline-none  border-2 border-slate-400 rounded-xl" type="text" placeholder="first name" required
              onChange={(e)=>{
               
                setfname(e.target.value)
                console.log(e.target.value)
              }}

              />
            </div>

            <div className="pb-2">
              <div>
                <label className="text-xl">Enter Last Name</label>
              </div>
              <input className="w-96 m-2 p-1 outline-none  border-2 border-slate-400 rounded-xl" type="text" placeholder="last name" required
              onChange={(e)=>{
                setlname(e.target.value)
                console.log(e.target.value)
              }} />

            </div>
            <div className="pb-2">
              <div>
                <label className="text-xl">Enter Email</label>
              </div>
              <input className="w-96 m-2 p-1 outline-none border-2 border-slate-400 rounded-xl" type="email" placeholder="abc@gmail.com" required
              onChange={(e)=>{
                setEmail(e.target.value)
                console.log(e.target.value)
              }}
              />

            </div>

            <div>
              <div>
                <label className="text-xl">Enter Password</label>

              </div>
              <input className="w-96 m-2 p-1 outline-none  border-2 border-slate-400 rounded-xl" type="password" placeholder="********" required
              onChange={(e)=>{
                setPassword(e.target.value)
                console.log(e.target.value)
              }}
              />

            </div>
            <div>
              <div>
                <label className="text-xl">Enter Confirm Password</label>

              </div>
              <input className="w-96 m-2 p-1 outline-none border-2 border-slate-400 rounded-xl" type="password" placeholder="********" required
              onChange={(e)=>{
                setCPassword(e.target.value)
                console.log(e.target.value)
              }}
              />

            </div>
            <div>
              <div>
                <label className="text-xl">Enter Role ID</label>

              </div>
              <input className="w-96 m-2 p-1 outline-none  border-2 border-slate-400 rounded-xl" type="text" placeholder="Enter Role ID" required
              onChange={(e)=>{
                setRoleId(e.target.value)
              }}
              />

            </div>
            <p className="m-2 text-base md:hover:cursor-pointer" onClick={
              () => {
                updateSignup.updateSignup(false)
              }
            }>Have An Account!LogIn</p>
            <div className="flex justify-center">
              <button type="submit" className="mt-4 bg-blue-500 w-60 disabled:bg-blue-100"
              onClick={signUp}
              disabled={!(firstName && lastName && email && password && cPassword && roleId)}
              >Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Sigup
