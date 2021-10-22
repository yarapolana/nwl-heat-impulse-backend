import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const service = new AuthenticateUserService()

    try {
      const result = await service.execute(request.body.code)

      return response.json(result)
    } catch (e) {
      console.error(e.message) 
      return response.json({ error: e.message })
    }
  }
}