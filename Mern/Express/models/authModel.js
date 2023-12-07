//const {models}= require("./index");

module.exports = {
    signUp: async (body) => {
      try {
        return {
          reponse: body,
        };
      } catch (error) {
        return {
          error: error,
        };
      }
    },
    logIn: () => {
      try {
        return {
          reponse: "User logIn Successfuly",
        };
      } catch (error) {
        return {
          error: error,
        };
      }
    },
    resetPassword: () => {
      try {
        return {
          reponse: "User Password Reset Successfully",
        };
      } catch (error) {
        return {
          error: error,
        };
      }
    },
    forgotPassword:()=>{
      try {
        return{
          response:"Forgot Password Successfully"
        }
        
      } catch (error) {
        return{
          error:error
        }
      }

    },
    logOut:()=>{
      try {
        return{
          response:"LogOut Successfully"
        }
        
      } catch (error) {
        return{
          error:error
        }
        
      }

    }
  };