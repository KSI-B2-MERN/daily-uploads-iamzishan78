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
};
