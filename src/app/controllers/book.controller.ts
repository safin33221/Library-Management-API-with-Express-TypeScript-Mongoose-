import { Request, Response } from "express"

export const createBook = async (req: Request, res: Response) => {
    try {
        const body = req.body;

        console.log(body);

        res.status(200).json({
            message: "data find",
            data: body
        })
    } catch (error) {
          res.status(400).json({
            message: "data not found find",
          
        })
        
    }
}

exports = {
    createBook
}