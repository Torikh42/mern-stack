import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProducts,
  deleteProduct,
} from "../controller/ProductController.js"
const router = express.Router();

router.get('/products', getProducts)
router.get('/products/:id', getProductById)
router.post('/products', createProduct)
router.patch('/products/:id', updateProducts)
router.delete('/products/:id', deleteProduct)

export default router;
