import { model, Schema } from "mongoose";
import { IBook } from "../interfaces/book.interface";

const bookSchema = new Schema<IBook>({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        enum: ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY']
    },
    description: {
        type: String
    },
    copies: {
        type: Number
    },
    available: {
        type: Boolean
    },
    isbn: {
        type: String
    }
})

export const Book = model('Book', bookSchema)