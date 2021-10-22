import { Request, Response } from "express"
import { ProfileUserService } from './../services/ProfileUserService'

export class ProfileUserController{
  async handle(request: Request, response: Response) {
    const service = new ProfileUserService()

    try {
      const { user_id } = request
      const result = await service.execute(user_id)

      return response.json(result)
    } catch (e) {
      console.error(e.message) 
      return response.json({ error: e.message })
    }
  }
}
