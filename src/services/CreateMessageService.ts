import { io } from '../app'
import { sendMessage } from '../utils'

export class CreateMessageService {
  async execute(text: string, user_id: string) {     
    const message = await sendMessage({ text, user_id })

    const infoWS = {
      text: message.text,
      user_id: message.user_id,
      created_at: message.created_at,
      user: {
        name: message.user.name,
        avatar_url: message.user.avatar_url
      }
    }

    io.emit('new_message', infoWS)

    return message
  }
}
