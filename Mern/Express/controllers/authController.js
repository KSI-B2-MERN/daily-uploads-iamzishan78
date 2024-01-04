const authService = require("../services/authService");
const joi = require("joi");
const jwt = require("jsonwebtoken");
//const config = require("../config.json");

const signupSchema = joi.object().keys({
  "firstName": joi.string().required().min(3),
  "lastName": joi.string().required().min(3),
  "email": joi.string().email().required(),
  "password": joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  "confirmPassword": joi.ref("password")
});
// {
//   "firstName":"Zeeshan",
//   "lastName":"Naseeb",
//   "email":"zishan123@gamil.com",
//   "password":"123456"

// }
const logInSchema = joi.object().keys({
  email: joi.string().email().required(),
  password: joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

module.exports = {
  signUp: async (req, res) => {
    try {
      console.log("Body ",req.body.password)
      const validae = await signupSchema.validateAsync(req.body);

      console.log("validate", validae);
      const serviceResponse = await authService.signUp(validae)
      if (serviceResponse.error) {
        res.send({
          error: serviceResponse.error,
        });
      }
      else {
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
  logIn: async (req, res) => {
    try {
      
      //const validate = await logInSchema.validateAsync(req.body);
      
      const logInResponse = await authService.logIn(req.body)
      console.log("logInResponse", logInResponse)

      if (logInResponse.error) {
        return res.send(
          {
            error: logInResponse.error
          }
        )
      }
      return res.send(
        {
          response: logInResponse
        });

      // req.session.token = logInResponse.token;
      // req.session.user = logInResponse.data;
      // req.session.save();
      const cookies={
        token:serviceResponse.response
      };

      res.cookie("/auth",cookies,{
        maxAge:3600000,
        httpOnly:true
      })
    } catch (error) {
      console.log("error controller", error)
      res.send({
        error: error,
      });
    }
  },
  resetPassword: (req, res) => {
    try {
      console.log("body", req.body);
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
      console.log("body", req.body);
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
      console.log("query", req.query);
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
  // logIn: async (req, res) => {
  //   try {
  //     console.log("log in controller")
  //     const validae= await loginSchema.validateAsync(req.body);
  //     const logInResponse= await authService.logIn(validae)

  //     if (logInResponse.error){
  //       return res.send(
  //         {
  //           error:logInResponse.error
  //         }
  //       )
  //     }

  //     req.session.token = logInResponse.token;
  //     req.session.user = logInResponse.data;
  //     req.session.save();
  //   } catch (error) {
  //     res.send({
  //       error: error,
  //     });
  //   }
  // },
  resetPassword: (req, res) => {
    try {
      console.log("body", req.body);
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
      console.log("body", req.body);
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
      console.log("query", req.query);
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
