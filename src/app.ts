import express, { Application, Request, Response } from "express";

const app: Application = express()

import cors from 'cors';

app.use(express.json())
app.use(cors())
import bookRoutes from './app/routes/book.route';

app.use('/api', bookRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('Library Management Sever in Running')
})

export default app