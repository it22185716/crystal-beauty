import express from 'express';
import { createProdct, deleteProduct, getProducts, updateProduct } from './controllers/productController.js';

const productRouter = express.Router();

productRouter.post("/",createProdct)
productRouter.get("/",getProducts)
productRouter.delete("/:productId",deleteProduct)
productRouter.put("/:productId",updateProduct)

export default productRouter;