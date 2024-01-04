const { models } = require("./index");

module.exports = {
  createUser: async (body, userId) => {
    try {
        console.log("check 3")
      const createdUser = await models.users.create({
        userId,
        ...body,
      });
      console.log("data ", createdUser)
      return {
        response: createdUser,
      };
    } catch (error) {
      console.log("errro ", error)
      return {
        error: error,
      };
    }
  },

  getUserByEmail: async (email) => {
    try {
      console.log("user Model")
      console.log("Email",email)
      const users = await models.users.findOne({
        where: {
          email:email,
        },
        attributes:{
          exclude:[
            "createdAt", "updatedAt", "deletedAt"
          ],
        }
      });
      console.log("user-return ",users)
      return {
        response: users,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getAllUsers: async(offset,limit)=>{

    try {
      const user= await models.users.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt", "password", "deletedAt"],
        },
        include:{
          model:models.roles,
          attributes:{
            exclude: ["createdAt", "updatedAt", "deletedAt"],
          }
        },
        offset:offset,
        limit:limit
      });
      return{
        response:user
      }
      
    } catch (error) {
      return{
        error:error
      }
      
    }

  },
  deletesUser: async (userId) => {
    try {
      const user = await models.users.destroy({
        where: {
          userId: userId,
        },
      });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

};
