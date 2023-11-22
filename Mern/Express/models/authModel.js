module.exports = {
    signUp: () => {
      try {
        return {
          reponse: "user signed up",
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
          reponse: "user logIn",
        };
      } catch (error) {
        return {
          error: error,
        };
      }
    },
  };