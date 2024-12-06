import express from 'express';

import {registerUser, loginUser, updateuser, deletUser, getAllUsers } from '../controllers/authConroller.js';

const router = express.Router();

router.get('/users',getAllUsers)
router.post('/register',registerUser);
router.post('/login',loginUser);
router.put('/:id',updateuser);
router.delete('/:id',deletUser);

export default router;