import express from 'express';
import { createPoduct, getProducts, updateProdct,deleteProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/',getProducts);
router.post('/',createPoduct);
router.put('/:id',updateProdct);
router.delete('/:id',deleteProduct);

export default router;