import express from "express";
const router = express.Router();
// import { v4 as uuidv4 } from 'uuid';

import { getUsers, createUser, getUser, deleteUser, updateUser } from "../controllers/users.js";

let users = []

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch(":/id", updateUser);

export default router;