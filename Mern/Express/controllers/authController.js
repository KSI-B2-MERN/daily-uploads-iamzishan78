const authService = require("../services/authService");
const joi = require("joi")

const signupSchema=joi.object().keys({
  "firstName":joi.string().required().min(3),
  "lastName": joi.string().required().min(3),
  "email":joi.string().email().required(),
  "password":joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  "confirmPassword":joi.ref("password")
});
// {
//   "firstName":"Zeeshan",
//   "lastName":"Naseeb",
//   "email":"zishan123@gamil.com",
//   "password":"123456"

// }

module.exports = {
  signUp: async (req, res) => {
    try {
      const validae = await signupSchema.validateAsync(req.body);

     console.log("validate",validae);
      //console.log("body",req.body);
      const serviceResponse = await authService.signUp(validae);
      if (serviceResponse.error) {
        res.send({
          error: serviceResponse.error,
        });
      }
      else{
        res.send({
          response: serviceResponse.response,
        });
        
      }
    } catch (error) {
      res.send({
        error: error,
      });
    }
  },
  logIn: (req, res) => {
    try {
      console.log("query",req.query);
      const serviceResponse = authService.logIn();
      if (serviceResponse.response) {
        res.send({
          response: serviceResponse.response,
        });
      }
      res.send({
        error: serviceResponse.error,
      });
    } catch (error) {
      res.send({
        error: error,
      });
    }
  },
  resetPassword: (req, res) => {
    try {
      console.log("body",req.body);
      const serviceResponse = authService.resetPassword();
      if (serviceResponse.response) {
        res.send({
          response: serviceResponse.response,
        });
      }
      res.send({
        error: serviceResponse.error,
      });
    } catch (error) {
      res.send({
        error: error,
      });
    }
  },
  forgotPassword: (req, res) => {
    try {
      console.log("body",req.body);
      const serviceResponse = authService.forgotPassword();
      if (serviceResponse.response) {
        res.send({
          response: serviceResponse.response,
        });
      }
      res.send({
        error: serviceResponse.error,
      });
    } catch (error) {
      res.send({
        error: error,
      });
    }
  },
  logOut: (req, res) => {
    try {
    console.log("query",req.query);
      const serviceResponse = authService.logOut();
      if (serviceResponse.response) {
        res.send({
          response: serviceResponse.response,
        });
      }
      res.send({
        error: serviceResponse.error,
      });
    } catch (error) {
      res.send({
        error: error,
      });
    }
  },
};
