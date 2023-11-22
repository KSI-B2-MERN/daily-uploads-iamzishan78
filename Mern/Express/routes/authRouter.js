const authController =require("../controllers/authController");

const router = require("express").Router();

router.post("/signUp",authController.signUp)
router.get("/logIn",authController.logIn)
router.patch("/resetPassword",authController.resetPassword)
router.put("/forgotPassword",authController.forgotPassword)
router.get("/logOut",authController.logOut)

module.exports= router;