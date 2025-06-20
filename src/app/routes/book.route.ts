import express from "express";
import { createBook } from '../controllers/book.controller'
const router = express.Router()


router.post('/books', createBook)

module.exports = router;