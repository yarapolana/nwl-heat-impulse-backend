import { Request, Response } from "express";
import { GetLastThreeMessagesService } from "../services/GetLastThreeMessagesService";

export class GetLastThreeController{
  async handle(request: Request, response: Response) {
    const service = new GetLastThreeMessagesService()

    try {
      const result = await service.execute()

      return response.json(result)
    } catch (e) {
      console.error(e.message) 
      return response.json({ error: e.message })
    }
  }
}