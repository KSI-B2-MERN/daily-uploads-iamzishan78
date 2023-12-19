function Login() {
    return (
      <>
        <div className="h-screen w-screen grid place-content-center">
          <div>
            <h2 className="pb-4 color-rgb(0,0,0) text-3xl">LogIn Here</h2>
            <form action="">
              <div className="pb-2">
                <div>
                  <label className="text-xl">Enter Email</label>
                </div>
                <input className="rounded-lg" type="email" placeholder="abc@gmail.com" />
  
              </div>
              <div>
                <div>
                  <label className="text-xl">Enter Password</label>
  
                </div>
                <input className="rounded-lg" type="password" placeholder="********" />
  
              </div>
              <div>
                <button type="submit" className="mt-4 bg-blue-500 ">LogIn</button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
  
  export default Login
  