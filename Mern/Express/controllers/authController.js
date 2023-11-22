const authService = require("../services/authService");
module.exports = {
  signUp: (req, res) => {
    try {
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
};
