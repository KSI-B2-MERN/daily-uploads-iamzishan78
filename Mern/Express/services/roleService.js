const { v4 : UUIDV4 } = require("uuid");
const roleModel = require("../models/roleModel");

module.exports={
    createRole: async(body)=>{
        console.log("service");
        try {

            const roleId= UUIDV4();
            const createRole = await roleModel.createRole(body.role,roleId);
            if(createRole.error){
                return{
                    error:createRole.error,
                }
            }
            return{
                response:createRole.response,
            }

        } catch (error) {
            return{
                error:error
            }
        }
    }
}