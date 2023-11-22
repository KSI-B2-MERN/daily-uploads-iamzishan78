const authService = require("../services/authService");
module.exports = {
  signUp: (req, res) => {
    try {
      console.log("body",req.body);
      const serviceResponse = authService.signUp();
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
