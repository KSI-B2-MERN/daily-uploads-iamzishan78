import { useState } from "react"
import AdminHome from "../components/admin/home"
import Nav from "../components/nav-bar"
import SideBar from "../components/side-bar"
import AddProduct from "../components/admin/add-product"
import Inventory from "../components/admin/inventory"
import Order from "../components/admin/order"

function Home() {

  const [component ,setComponent]= useState("Addproduct")
  const updateComponent=(newState)=>{

    setComponent(newState)

  }
  return (
    <>

      <div className="w-screen h-screen bg-gray-50 flex ">
        <Nav updateComponent={updateComponent}/>
        <SideBar updateComponent={updateComponent}/>
        {component==="Home" && <AdminHome/>}
        {component==="AddProduct" && <AddProduct/>}
        {component==="Inventory" && <Inventory/>}
        {component==="Order" && <Order/>}
        
      
        
      </div>
    </>
  )
}

export default Home