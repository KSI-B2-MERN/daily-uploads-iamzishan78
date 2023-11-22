const authController =require("../controllers/authController");

const router = require("express").Router();

router.get("/signUp",authController.signUp)
router.get("/logIn",authController.logIn)

module.exports= router;
