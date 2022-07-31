import express from 'express';
import { getAllBooks, getById, addBook, updateBook, deleteBook } from './controller.js';

const router = express.Router();

router.get("/", getAllBooks);

router.post("/", addBook);

router.get("/:id", getById);

router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

export const bookroutes = router;

