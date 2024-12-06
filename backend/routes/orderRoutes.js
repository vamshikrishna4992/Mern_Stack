import express from 'express';
import { createOrder, getOrders } from '../controllers/orderController.js';


const router = express.Router();

router.get('/',getOrders);
router.post('/',createOrder);

export default router;