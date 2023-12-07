const {models}=require("./index")     //tables Object call
module.exports={
    createRole: async(role,roleId)=>{
        console.log("Model");
        try {

            const createRole = await models.roles.create({
                role,
                roleId
            });// models--> roles table --> create function

            return {
                response: createRole,
            }

        } catch (error) {
            return{
                error:error
            }
        }
    }
}