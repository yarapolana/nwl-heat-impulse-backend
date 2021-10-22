import { getMessages, sendMessage } from '../utils'

export class GetLastThreeMessagesService {
  async execute() {     
    return await getMessages(3)
  }
}
