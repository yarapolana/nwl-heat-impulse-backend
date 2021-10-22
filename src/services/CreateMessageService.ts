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

/**
 * Receive github code(string)
 * Retrieve access_token from github
 * Retrieve user information from github
 * Verify if user exists in our database
 * If exists generate a new token if not we save the user to database and generate a new token
 * Return token with user information
 */
