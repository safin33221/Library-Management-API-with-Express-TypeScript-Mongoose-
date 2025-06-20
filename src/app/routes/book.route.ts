import { Router } from "express";
const router = Router()
import { createBook } from '../controllers/book.controller'


router.post('/books', createBook)

module.exports = router;