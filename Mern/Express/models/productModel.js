const {models}= require("./index")

module.exports={

    addProduct :async (body)=>{

        try {

            const product = await models.products.create({
                ...body,
                userId:body.userId
            })

            return{
                response:product
            }

            
        } catch (error) {
            console.log("error",error)
            return {
                error:error
            }
            
        }
    },

    getProduct :async()=>{
        try {
            console.log("111")
            const getProduct = await models.products.findAll();

            return {
                response:getProduct
            }
            
        } catch (error) {

            return{
                error:error
            }
            
        }

    }
    
}