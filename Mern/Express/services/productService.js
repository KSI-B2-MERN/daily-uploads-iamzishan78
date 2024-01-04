
const productModel = require("../models/productModel")
const { v4: uuidV4 } = require("uuid")

module.exports = {
    addProduct: async (body) => {
        try {

            const productId = uuidV4()
            body.productId = productId

            const product = await productModel.addProduct(body)

            if (product.error) {
                return {
                    error: product.error
                }
            }
            return {
                response: product.response
            }

        } catch (error) {

            return {
                error: error
            }

        }

    },
    getProduct: async () => {
        try {
            console.log("11")
            const getProduct = await productModel.getProduct();

            if (getProduct.error) {
                return {
                    error: getProduct.error
                }
            }
            return {
                response: getProduct.response
            }

        } catch (error) {

            return {
                error: error
            }

        }

    }
}