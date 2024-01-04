const router = require("express").Router();
const { addProduct,getProduct } = require("../controllers/productController");

router.post("/addProduct", addProduct);
router.get("/getProducts", getProduct);

module.exports = router;
