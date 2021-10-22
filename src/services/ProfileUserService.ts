import { getUserProfile } from '../utils'

export class ProfileUserService {
  async execute(user_id: string) {     
    return await getUserProfile(user_id)
  }
}
