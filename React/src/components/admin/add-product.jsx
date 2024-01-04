import axios from "axios";
import { useState } from "react";

function AddProduct() {
    
    const [productName, setProductName]= useState("");
    const [price, setPrice]= useState("");
    const [quantity, setQuantity]= useState("");
    const [description, setDescription]= useState("");


    const addProduct =async()=>{
        try {
            const AddResponse = await axios.post("http://localhost:3001/product/addProduct",{
                productName,
                price,
                description,
                quantity

            });

        console.log("Response",AddResponse)

        if(AddResponse.data.error){
            return alert("Not Add Your Product")
        
        }
        return alert("Added Successfully")

            
        } catch (error) {
            console.log("Invalid Inputs",error)
            return{
                error:error
            }
            
        }
    }

    return (
      <>
        <div className=" 100 h-full w-full flex justify-center items-end">
          <div className="bg-white w-11/12 h-5/6 shadow-lg p-2">
            <div className="flex flex-wrap gap-12 mt-10">

                <div >
                    <label className="font-bold" >Product Name</label> <br />
                    <input  type="text" placeholder="Enter Name" className="w-60 h-10 border-black border-2 rounded-md "
                    onChange={

                        (e)=>{
                            
                            setProductName(e.target.value)
                            console.log(e.target.value)   
                        }
                        
                    } />
                </div>
                <div>
                    <label className="font-bold">Product Price</label> <br />
                    <input type="number" placeholder="Enter Price" className="w-60 h-10 border-black border-2 rounded-md"
                    onChange={

                        (e)=>{
                            
                            setPrice(e.target.value)
                            console.log(e.target.value)   
                        }
                        
                    } />
                </div>
                <div>
                    <label className="font-bold">Product Qunatity</label> <br />
                    <input type="number" placeholder="Enter Qunatity" className="w-60 h-10 border-black border-2 rounded-md " 
                    onChange={

                        (e)=>{
                            
                            setQuantity(e.target.value)
                            console.log(e.target.value)   
                        }
                        
                    }/>
                </div>
                <div>
                    <label className="font-bold">Product Description</label> <br />
                    <input type="text" placeholder="Enter Description" className="w-60 h-10 border-black border-2 rounded-md " 
                    onChange={

                        (e)=>{
                            
                            setDescription(e.target.value)
                            console.log(e.target.value)   
                        }
                        
                    }/>
                </div>
                <button className="flex absolute right-80 bottom-40 w-35 h-15 bg-purple-950 text-white disabled:bg-purple-300"
                disabled={!(productName && price && description && quantity)}
                onClick={()=>{
                    addProduct()
                }}>ADD</button>
            </div>
            
          </div>
        </div>
      </>
    );
  }
  
  export default AddProduct;
  