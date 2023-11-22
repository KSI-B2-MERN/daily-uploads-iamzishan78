const authModel = require("../models/authModel");
module.exports = {
  signUp: () => {
    try {
      const signUpResponse = authModel.signUp();
      if (signUpResponse.reponse) {
        return {
          response: signUpResponse.reponse,
        };
      }
      return {
        error: signUpResponse.error,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  logIn: () => {
    try {
      const logInResponse = authModel.logIn();
      if (logInResponse.reponse) {
        return {
          response: logInResponse.reponse,
        };
      }
      return {
        error: logInResponse.error,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  resetPassword: () => {
    try {
      const resetPasswordResponse = authModel.resetPassword();
      if (resetPasswordResponse.reponse) {
        return {
          response: resetPasswordResponse.reponse,
        };
      }
      return {
        error: resetPasswordResponse.error,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  forgotPassword:()=>{

    try {
      const modelResponse=authModel.forgotPassword();
      if(modelResponse.response){
          return{
            response:modelResponse.response
          }
      }
      return{
        response:modelResponse.error
      }
    } catch (error) {

      return{
        error:error
      }
      
    }
  },
  logOut:()=>{

    try {
      const modelResponse=authModel.logOut();
      if(modelResponse.response){
          return{
            response:modelResponse.response
          }
      }
      return{
        response:modelResponse.error
      }
    } catch (error) {

      return{
        error:error
      }
      
    }
  }
};
