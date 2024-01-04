const authModel = require("../models/authModel");
const bcrypt= require("bcrypt")
const userModel=require("../models/userModel");
const jwt = require("jsonwebtoken");
const config = require("../config.json");
const { models } = require("../models");
const sessionModel = require("../models/sessionModel");

module.exports = {
  signUp: async (body) => {
    try {
      delete body.confirmPassword;
      body.password= await bcrypt.hash(body.password,10)

      const signUpResponse = await authModel.signUp(body);
      if (signUpResponse.error) {
        return {
          error: signUpResponse.error,
        };
      }
      return {
        response: signUpResponse.reponse,
      };
      
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  logIn: async (body) => {
    try {
      console.log("auth Service")
      console.log("Body",body.email)
      const logInResponse = await userModel.getUserByEmail(body.email);
      // console.log(logInResponse.error);
      console.log("logInResponse.response",logInResponse.response)
      if (logInResponse.error || !logInResponse.response) {
        return {
          error: "invalid credentails",
        };
      }

      const login = await bcrypt.compare(
        body.password,
        logInResponse.response.dataValues.password
      );


      if (!login){
        return {
          error: "invalid credentails",
        };
      }
      delete logInResponse.response.dataValues.password;
      console.log("Response in service",logInResponse)
      const token = jwt.sign(
        logInResponse.response.dataValues,
        config.jwt.secret,
        {
          expiresIn: "1h",
        }
      );

      const getSession = await sessionModel.getSessionByUserId(logInResponse.response.dataValues.userId)
      if(getSession.error){
        return{
          error:"Not Exist"
        }
      }

      return {
        token: token,
        data: logInResponse.response.dataValues,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  // logIn:async (body) => {
  //   try {
  //     console.log("log in service")
  //     const logInResponse = await userModel.getUserByEmail(body.email);
  //    // if(logInResponse.response){console.log("Error FOUND")}
  //     if( logInResponse.error  ||  !logInResponse.response){
  //       // console.log("occured error",error)
  //       return {
  //         error:"Invalid Email OR Password 1"
  //       }
  //     }
  //     const logIn = await bcrypt.compare(
  //       body.password,
  //       logInResponse.reponse.dataValues.password)
  //     if (!logIn){
  //       return{
  //         error:"Invalid Email OR Password 2"
  //       }
  //     }
  //     delete logInResponse.reponse.dataValues.password;
  //     const token = jwt.sign(
  //       logInResponse.response.dataValues,
  //       config.jwt.secret,
  //       {
  //         expiresIn: "1h",
  //       }
  //     );

  //     return {
  //       token: token,
  //       data: logInResponse.response.dataValues,
  //     };

  //   } catch (error) {
  //     return {
  //       error: error,
  //     };
  //   }
  // },
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
