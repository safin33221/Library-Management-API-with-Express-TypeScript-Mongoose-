import express, { Application, Request, Response } from "express";

const app: Application = express()


app.use(express.json())

import bookRoutes from './app/routes/book.route';

app.use('/api', bookRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('Library Management Sever in Running')
})

export default app