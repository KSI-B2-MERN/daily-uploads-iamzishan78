const router = require("express").Router();

const userController= require("../controllers/userController");

router.post("/createUser", userController.createUser);
router.get("/getAllUsers", userController.getAllUsers);
router.delete("/deleteUser", userController.deletesUser);
module.exports= router;