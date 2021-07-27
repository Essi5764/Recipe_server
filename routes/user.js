import express from "express";
const router = express.Router();

import { signin, signup, getUser, getUsers, updateUser, deleteUser,grantAccess } from "../controllers/user.js";

router.post("/signin", signin);

router.post("/signup", signup);

// router.get('/user/:userId', getUser);

// router.get('/users',user.grantAccess('readAny', 'profile'), getUsers);

// router.put('/user/:userId',user.grantAccess('updateAny', 'profile'), updateUser);

// router.delete('/user/:userId',user.grantAccess('deleteAny', 'profile'), deleteUser);

export default router;