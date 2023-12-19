const router = require("express").Router();

const userController= require("../controllers/userController");
const middelware = require("../middelware");

// router.post("/createUser",middelware.vendor, userController.createUser);

router.post("/createUser",userController.createUser);
router.get("/getAllUsers", userController.getAllUsers);
router.delete("/deleteUser", userController.deletesUser);
module.exports= router;