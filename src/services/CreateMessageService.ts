import { sendMessage } from '../utils'

export class CreateMessageService {
  async execute(text: string, user_id: string) {     
    return await sendMessage({ text, user_id })
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
