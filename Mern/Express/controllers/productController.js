const productService = require("../services/productService")
const joi = require("joi")
const addProductSchema = joi.object().keys({
    userId: joi.string().required(),
    // images: joi.array().required(),
    productName: joi.string().required(),
    price: joi.number().required(),
    quantity: joi.number().required(),
    description: joi.string().required(),
  });

module.exports={
    addProduct :async (req,res)=>{
        try {
            const userId="00714d54-9162-460c-9d7e-92603068e8e0"
            req.body.userId = userId

            const validate = await addProductSchema.validateAsync(req.body);
            const product = await productService.addProduct(validate);

            if(product.error){
                return res.send({
                    error:product.error
                })
            }
            return res.send({
                response: product.response
            })
        } catch (error) {

            return res.send({
                error:error
            })
            
        }
        
    },
    getProduct: async (req,res) => {
        try {
            console.log("1")
            console.log("Body",req.body)
            const getProduct = await productService.getProduct();

            if (getProduct.error){
                return res.send ({
                    error: getProduct.error
                })
            }
            return res.send ({
                response: getProduct.response
            })

        } catch (error) {

            return res.send ({
                error: error
            })

        }

    }
}