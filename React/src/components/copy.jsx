import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {

  const [signup, setSignup] = useState(false);
  const [fname, setfname] =  useState("");
  const [lname, setlname] =  useState("");    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] =  useState("");
  


  return (
    <>
    {!signup &&
      <div className="bg-[#756CFB] w-screen h-screen pt-20  font-serif flex justify-evenly">
      <form className="w-1/3 h-max rounded-md bg-white p-2">
        <div className="flex justify-center">
         <p className="text-4xl m-2 font-medium">Login</p>
        </div>
        <div className="text-xl p-2">
          <input type="email" placeholder="abc@gmail.com" className="w-96 m-2 p-1 outline-none border-0 border-b-2 border-slate-400" required
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
          />
          <input type="password" placeholder="Password" className="w-96 m-2 p-1 outline-none border-0 border-b-2 border-slate-400" required
          onChange={(e)=>{
            setPassword(e.target.value);
          }}
          />
          <p className="m-2 text-base md:hover:cursor-pointer" 
          onClick={()=> setSignup(true)}
          >Don't have an account? Register YourSelf!
          </p>          
        </div>
        <div className="flex justify-center">
          <button className="bg-[#756CFB] p-2 font-medium border-none outline-none w-56 text-white text-xl md:hover:outline-none disabled:bg-gray-400" 
          disabled={!(email && password)}
          >Login</button>
        </div>
      </form>

    </div>}

{/* ------------------------------------------------ */}



    {signup && <div className="bg-[#756CFB] w-screen h-screen pt-20  font-serif flex justify-evenly">
      <form className="w-1/3 h-max rounded-md bg-white p-2">
        <div className="flex justify-center">
         <p className="text-4xl m-2 font-medium">Sign Up</p>
        </div>
        <div className="text-xl p-2">
          <input type="text" placeholder="First Name" className="w-5/12 m-2 p-1 outline-none border-0 border-b-2 border-slate-400 " required
          onChange={(e)=>{
            console.log(e.target.value);
            setfname(e.target.value)}}
          />
          <input type="text" placeholder="Last Name" className="w-48 ml-3 p-1 outline-none border-0 border-b-2 border-slate-400" required
          onChange={(e)=>{setlname(e.target.value)}}
          />
          <input type="email" placeholder="abc@gmail.com" className="w-96 m-2 p-1 outline-none border-0 border-b-2 border-slate-400" required
          onChange={(e)=>{setEmail(e.target.value)}}
          />
          {/* <select className="w-96 m-2 p-1 outline-none border-0 border-b-2 border-slate-400" required>
            <option >Select Your Role</option>
            <option>Customer</option>
            <option>Vendor</option>
          </select> */}
          <input type="password" placeholder="Password" className="w-96 m-2 p-1 outline-none border-0 border-b-2 border-slate-400" required 
          onChange={(e)=>{setPassword(e.target.value)}}
          />
          <input type="password" placeholder="Confirm Password" className="w-96 m-2 p-1 outline-none border-0 border-b-2 border-slate-400" required 
          onChange={(e)=>{setCPassword(e.target.value)}}
          />
          <p className="m-2 text-base md:hover:cursor-pointer" 
          onClick={()=> setSignup(false)}
          >Already have an account? Login</p>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#756CFB] p-2 font-medium border-none outline-none w-56 text-white text-xl md:hover:outline-none disabled:bg-gray-300" 
          
          disabled= {!(email, fname, lname, password, cpassword)}
          >Create Account</button>
        </div>
      </form>

    </div>}

    
    </>
  )
}

export default App