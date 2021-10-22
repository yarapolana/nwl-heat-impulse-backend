import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";

export class CreateMessageController {
  async handle(request: Request, response: Response) {
    const service = new CreateMessageService()

    try {
      const { text } = request.body
      const { user_id } = request
      const result = await service.execute(text, user_id)

      return response.json(result)
    } catch (e) {
      console.error(e.message) 
      return response.json({ error: e.message })
    }
  }
}